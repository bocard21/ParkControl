import { useState } from "react";
import "./style.css";

const CadastroReserva = () => {
  const [formData, setFormData] = useState({
    placa: "",
    nome: "",
    apartamento: "",
    bloco: "",
    modelo: "",
    cor: "",
    vaga: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Cadastro realizado com sucesso");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Reserva</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="placa"
          placeholder="Placa"
          value={formData.placa}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apartamento"
          placeholder="Número do Apartamento"
          value={formData.apartamento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bloco"
          placeholder="Bloco"
          value={formData.bloco}
          onChange={handleChange}
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cor"
          placeholder="Cor"
          value={formData.cor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vaga"
          placeholder="Número da Vaga"
          value={formData.vaga}
          onChange={handleChange}
        />
        <button type="submit" className="cadastro-button">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroReserva;
