import React from 'react'
import '../../css/forms/loginForm'

const loginForm = () => {
  return (
    <section className="loginForm-container">

        <div className="loginForm-img">
            <img src="" alt="" />
        </div>

        <div className="loginForm-form">
            <form action="">
                <h1>Instagram</h1>

                <label htmlFor="name">
                    <input type="text" name="name" id="" placeholder='Telefono, usuario o correo electronico' />
                </label>

                <label htmlFor="password">
                    <input type="password" name="password" id="" placeholder='Contraseña' />
                </label>

                <input type="submit" value="Entrar" />

                <span>o</span>

                <p>Inicia sesion fb **</p>
            </form>
        </div>

        <div className="register-button">
            <p className='register-button-p'>¿No tienes una cuenta? <a className='register-button-link' href="">Registrate</a></p>
        </div>
        
    </section>
  )
}

export default loginForm