import psycopg2
import smtplib
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configurações do banco de dados
DB_HOST = "localhost"
DB_NAME = "ath_saude"
DB_USER = "postgres"
DB_PASSWORD = "110202"

# Configurações do e-mail
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "thomasnhenrique@gmail.com"
SMTP_PASSWORD = "sdzm ibxu qrsc xugb"

# Função para enviar e-mail
def enviar_email(destinatario, assunto, corpo):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER
        msg['To'] = destinatario
        msg['Subject'] = assunto
        msg.attach(MIMEText(corpo, 'html'))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, destinatario, msg.as_string())

        print(f"✅ E-mail enviado para {destinatario}")

    except Exception as e:
        print(f"❌ Erro ao enviar e-mail para {destinatario}: {e}")

# Função principal
def distribuir_leads():
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        cursor = conn.cursor()
        print("\n✅ Conectado ao banco de dados!")

        # Consultar corretores
        cursor.execute('SELECT id, nome, email FROM "Corretor" ORDER BY id')
        corretores = cursor.fetchall()
        print(f"📊 Corretores encontrados: {len(corretores)}")

        # Consultar clientes disponíveis (que ainda não foram atribuídos)
        cursor.execute("""
            SELECT id, name, email, phone, age, "contactPreference", profession, hasCNPJ, hasHealthPlan 
            FROM "Lead" 
            WHERE id NOT IN (SELECT leadId FROM "CorretorLead")
        """)
        clientes = cursor.fetchall()
        print(f"📊 Clientes disponíveis: {len(clientes)}")

        if not clientes:
            print("⏳ Nenhum novo cliente disponível. Aguardando próxima verificação...\n")
        else:
            # Recuperar último corretor que recebeu um lead
            cursor.execute('SELECT corretorId FROM "CorretorLead" ORDER BY id DESC LIMIT 1')
            last_corretor = cursor.fetchone()
            last_corretor_id = last_corretor[0] if last_corretor else None

            # Se houver apenas um cliente, o próximo corretor recebe
            if len(clientes) == 1:
                cliente = clientes[0]
                cliente_id, cliente_nome, cliente_email, cliente_phone, cliente_age, cliente_contactPreference, cliente_profession, cliente_hasCNPJ, cliente_hasHealthPlan = cliente

                # Encontrar o próximo corretor
                if last_corretor_id:
                    index = next((i for i, c in enumerate(corretores) if c[0] == last_corretor_id), -1)
                    next_corretor = corretores[(index + 1) % len(corretores)]  # Pega o próximo na fila
                else:
                    next_corretor = corretores[0]  # Se for a primeira vez, pega o primeiro corretor

                corretor_id, corretor_nome, corretor_email = next_corretor
                print(f"🔹 Cliente único {cliente_nome} atribuído ao corretor {corretor_nome}.")

                # Registrar a atribuição no banco de dados
                cursor.execute("""
                    INSERT INTO "CorretorLead" (corretorId, leadId) VALUES (%s, %s)
                """, (corretor_id, cliente_id))

                # Convertendo valores de True/False para 'Sim'/'Não'
                cliente_hasCNPJ = 'Sim' if cliente_hasCNPJ else 'Não'
                cliente_hasHealthPlan = 'Sim' if cliente_hasHealthPlan else 'Não'

                # Montar o corpo do e-mail (usando HTML para negrito)
                corpo_email = f"""
                    <p>Olá, <strong>{corretor_nome}</strong>!</p>
                    <p>Você recebeu um novo cliente para cotação:</p>
                    <ul>
                        <li><strong>Nome:</strong> {cliente_nome}</li>
                        <li><strong>Email:</strong> {cliente_email}</li>
                        <li><strong>Telefone:</strong> {cliente_phone}</li>
                        <li><strong>Idade:</strong> {cliente_age}</li>
                        <li><strong>Preferência de Contato:</strong> {cliente_contactPreference}</li>
                        <li><strong>Profissão:</strong> {cliente_profession}</li>
                        <li><strong>CNPJ:</strong> {cliente_hasCNPJ}</li>
                        <li><strong>Plano de Saúde:</strong> {cliente_hasHealthPlan}</li>
                    </ul>
                    <p>Atenciosamente,<br/>Equipe de Saúde</p>
                """
                enviar_email(corretor_email, "Novo Cliente para Cotação", corpo_email)

            else:
                # Distribuir clientes igualitariamente entre os corretores
                clientes_por_corretor = len(clientes) // len(corretores)

                for i, corretor in enumerate(corretores):
                    corretor_id, corretor_nome, corretor_email = corretor
                    clientes_atribuidos = clientes[i * clientes_por_corretor:(i + 1) * clientes_por_corretor]

                    if not clientes_atribuidos:
                        print(f"⚠️ Corretor {corretor_nome} não recebeu clientes.")
                        continue

                    corpo_email = f"Olá, {corretor_nome}!\n\nClientes atribuídos para cotação:\n\n"
                    for cliente in clientes_atribuidos:
                        cliente_id, cliente_nome, cliente_email, cliente_phone, cliente_age, cliente_contactPreference, cliente_profession, cliente_hasCNPJ, cliente_hasHealthPlan = cliente

                        # Convertendo valores de True/False para 'Sim'/'Não'
                        cliente_hasCNPJ = 'Sim' if cliente_hasCNPJ else 'Não'
                        cliente_hasHealthPlan = 'Sim' if cliente_hasHealthPlan else 'Não'

                        corpo_email += f"""
                            <ul>
                                <li><strong>Nome:</strong> {cliente_nome}</li>
                                <li><strong>Email:</strong> {cliente_email}</li>
                                <li><strong>Telefone:</strong> {cliente_phone}</li>
                                <li><strong>Idade:</strong> {cliente_age}</li>
                                <li><strong>Preferência de Contato:</strong> {cliente_contactPreference}</li>
                                <li><strong>Profissão:</strong> {cliente_profession}</li>
                                <li><strong>CNPJ:</strong> {cliente_hasCNPJ}</li>
                                <li><strong>Plano de Saúde:</strong> {cliente_hasHealthPlan}</li>
                            </ul>
                        """

                        # Registrar a atribuição no banco de dados
                        cursor.execute("""
                            INSERT INTO "CorretorLead" (corretorId, leadId) VALUES (%s, %s)
                        """, (corretor_id, cliente_id))
                        print(f"✅ Cliente {cliente_nome} atribuído ao corretor {corretor_nome}.")

                    # Enviar e-mail
                    enviar_email(corretor_email, "Clientes para Cotação", corpo_email)

            # Commit das alterações no banco de dados
            conn.commit()
            print("✅ Distribuição finalizada e alterações salvas no banco.")

        cursor.close()
        conn.close()
        print("✅ Conexão com o banco fechada.")

    except Exception as e:
        print(f"❌ Erro na execução: {e}")

# Loop para rodar a cada 5 minutos
while True:
    distribuir_leads()
    time.sleep(300)  # Espera 5 minutos (300 segundos)
