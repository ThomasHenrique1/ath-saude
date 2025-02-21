interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="p-6 mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}