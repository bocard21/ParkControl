import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cadastro">Cadastrar Reserva</Link></li>
        <li><Link to="/listar">Listar Vagas</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
