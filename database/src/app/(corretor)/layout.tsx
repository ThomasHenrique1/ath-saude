// src/app/(corretor)/layout.tsx
import React from 'react';

export default function CorretorLayout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto p-4">{children}</div>;
}