import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Controle de Estacionamento</h1>
      <div className="home-buttons">
        <Link to="/cadastro">
          <button className="home-button">Cadastrar Reserva</button>
        </Link>
        <Link to="/listar">
          <button className="home-button">Listar Vagas</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
