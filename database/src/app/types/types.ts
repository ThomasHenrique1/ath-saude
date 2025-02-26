// src/app/types/types.ts
export interface Lead {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    status: 'novo' | 'em_andamento' | 'negado';
    plano_saude?: string;
    formacao_academica?: string;
  }
  
  export interface Corretor {
    id: number;
    nome: string;
    email: string;
  }
  
  export interface CorretorLead {
    corretorId: number;
    leadId: number;
  }