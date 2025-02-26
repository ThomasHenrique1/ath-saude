import CorretorPanel from "@/app/components/CorretorPanel/CorretorPanel";
import { useAuth } from "../hooks/useAuth";

export default function CorretorPage() {
  useAuth(); // Protege a rota
  return <CorretorPanel />;
}
