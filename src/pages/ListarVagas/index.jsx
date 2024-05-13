// src/pages/ListarVagas/index.jsx
import { useState } from "react";
import "./style.css";

const ListarVagas = () => {
  const [vagas, setVagas] = useState([
    { numero: 1, ocupado: true },
    { numero: 2, ocupado: false },
    { numero: 3, ocupado: true },
  ]);

  const handleRemove = (numero) => {
    setVagas(vagas.filter((vaga) => vaga.numero !== numero));
  };

  return (
    <div className="listar-container">
      <h2 className="title">Vagas Cadastradas</h2>
      <ul className="vaga-list">
        {vagas.map((vaga) => (
          <li key={vaga.numero} className="vaga-item">
            <span>
              Vaga {vaga.numero}: {vaga.ocupado ? "Ocupada" : "Livre"}
            </span>
            <button
              className="remover-button"
              onClick={() => handleRemove(vaga.numero)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h2 className="title">Vagas Disponíveis</h2>
      <ul className="vaga-list">
        {vagas
          .filter((vaga) => !vaga.ocupado)
          .map((vaga) => (
            <li key={vaga.numero} className="vaga-item vaga-disponivel">
              <span>Vaga {vaga.numero} está disponível</span>
              <button
                className="remover-button"
                onClick={() => handleRemove(vaga.numero)}
              >
                Remover
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListarVagas;
