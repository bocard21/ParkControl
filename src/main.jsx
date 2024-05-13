import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroReserva from "./pages/CadastroReserva";
import ListarVagas from "./pages/ListarVagas";
import Main from "./components/Main";

createRoot(document.getElementById("root")).render(
  <Router>
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroReserva />} />
        <Route path="/listar" element={<ListarVagas />} />
      </Routes>
    </Main>
  </Router>
);
