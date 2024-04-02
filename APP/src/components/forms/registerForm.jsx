import React from 'react';

import Formfooter from '../footer/LoginFormFooter'


import '../../css/forms/loginForm.css';
import '../../css/global/globalStyles.css'

const RegisterForm = () => {
  return (
    <div className="loginform-main">
      <section className="loginForm-container">

        <div className="loginForm-form">

          <div className="loginForm-container">

            <form action="">
              <h1 className='loginForm-tittle'>IG-Clone</h1>
              <h3 className='loginForm-h3'>Registrate para ver fotos y videos de tus amigos</h3>

              <div className="register-button-container">

                <a href=""><button className='btn register-btn'>Iniciar Sesión con Facebook</button></a>

              </div>

              <label htmlFor="name">
                <input className='loginForm-control' type="text" name="name" id="" required placeholder='Correo electronico' />
              </label>

              <label htmlFor="fullname">
                <input className='loginForm-control' type="text" name="fullname" id="" required placeholder='Nombre completo' />
              </label>

              <label htmlFor="username">
                <input className='loginForm-control' type="text" name="username" id="" required placeholder='Nombre de usuario' />
              </label>

              <label htmlFor="password">
                <input className='loginForm-control' type="password" name="password" id="" required placeholder='Contraseña' />
              </label>

              <p className='form-paragraph' >Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. <a href="" className='link-fb'>Mas información</a></p>
              <p className='form-paragraph' >Al registrarte, aceptas nuestras <a href="" className='link-fb'>Condiciones</a>, la <a href="" className='link-fb'>Política de privacidad</a> y la <a href="" className='link-fb'>Política de cookies.</a></p>
              <input type="submit" className='loginForm-form-btn btn' value="Registrarse" />


            </form>

          </div>

          <div className="register-button">
            <p className='register-button-p'>¿Tienes una cuenta? <a className='link' href="">Inicia Sesion</a></p>
          </div>

        </div>

      </section>
      <Formfooter />

    </div>
  )
}

export default RegisterForm;
