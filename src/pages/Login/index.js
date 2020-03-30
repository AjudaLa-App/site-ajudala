import React, { useState } from 'react';
import './styles.css';
import helpersImg from '../../assets/helpers.png';
import logoImg from '../../assets/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Swal from 'sweetalert2'

export default function Login() {

    const [id, setId] = useState('');
    const history = useHistory();

    function handleLoginErr () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado, tente novamente',
          })
    }

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
          
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            
            history.push('/profile');
        } catch (err) {
            handleLoginErr();
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg}  alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={helpersImg} alt="Helpers"></img>
        </div>
    );
}