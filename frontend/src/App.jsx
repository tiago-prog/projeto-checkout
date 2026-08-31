import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import PendingPage from "./pages/PendingPage";

/**
 * App Principal
 * Roteia entre as diferentes páginas da aplicação.
 */
export default function App() {
  const path = window.location.pathname;

  // Renderiza a página apropriada baseado na rota
  if (path === "/sucesso") {
    return <SuccessPage />;
  }

  if (path === "/cancelado") {
    return <CancelPage />;
  }

  if (path === "/pendente") {
    return <PendingPage />;
  }

  // Página inicial (padrão)
  return <HomePage />;
}