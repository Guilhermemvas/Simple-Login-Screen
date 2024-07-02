import React from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import {useState} from 'react';
import './styleLogin.css'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUsername(e);
    setPassword(e);
}

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
            <input onChange={(e)=>{setUsername(e.target.value)}} type="email" placeholder='E-mail' />
            <FaUser className='icon' />
            </div>
            <div className='input-password'>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Senha' />
            <FaLock className ="icon" />
            
            </div>

            
            <div className="recall-forget">
              <label htmlFor="">
                <input type="checkbox" />
                Lembre de mim
              </label>
              <a href="">Esqueceu a senha?</a>
            </div>
            
            <button type="submit">Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="">Registrar</a></p>
              </div>
        </form>
    </div>
  )
}

export default Login;