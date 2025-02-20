import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#6c7a59',   // Verde para detalhes ou botões
        'secondary': '#121827', // Título e textos em destaque
        'light-gray': '#e6e6e6', // Fundo claro
        'gray-medium': '#b5b4b4', // Texto secundário
        'gray-light': '#cdcdcd', // Bordas e destaques
        'blue-dark': '#121827', // sla pra que vai servir sa bosta
      },
    },
  },
  plugins: [],
} satisfies Config;
