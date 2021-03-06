import React, { useState } from "react";
import helpersImg from "../../assets/helpers.png";
import logoImg from "../../assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import Swal from "sweetalert2";

import { Container, Content } from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleLoginErr() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo deu errado, tente novamente"
    });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // const response = await api.post('sessions', { email, password });

      // localStorage.setItem('ongEmail', email);
      // localStorage.setItem('ongName', response.data.name);

      history.push("/profile");
    } catch (err) {
      handleLoginErr();
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be The Hero" className="logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Seu email"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Sua senha"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Content>
      <img src={helpersImg} alt="Helpers"></img>
    </Container>
  );
}
