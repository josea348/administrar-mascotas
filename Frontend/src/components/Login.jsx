import React, { useState } from 'react'
import Inputs from './Atoms/Inputs'
import Boton from './Atoms/Boton'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/validarUser', login);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        Swal.fire({
          title: "Exito!",
          text: response.data.message,
          icon: "success"
        });
        navigate('/dashboard');
        console.log(response.data);
      
    } catch (e) {
      console.log("Error: "+e);
      Swal.fire({
        title: "Error!",
        text: `Error: ${e.message}`,
        icon: "error"
      });
    }
  }

  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Inputs
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
            value={login.email}
          />
        </div>
        <div>
          <Inputs
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={handleInputChange}
            value={login.password}
          />
        </div>
        <div>
          <Boton type="submit">Iniciar sesión</Boton>
        </div>
      </form>
    </div>
  )
}

export default Login