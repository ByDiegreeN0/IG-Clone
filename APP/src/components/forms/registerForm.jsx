import React from 'react'
import '../../css/forms/registerForm'


const registerForm = () => {
  return (
    <section className="register-form">

      <h1>Instagram</h1>
      <p>Registrate para ver las fotos y videos de tus amigos</p>

      <form action="" className="register-form">

        <button className='register-form-fb-btn'><a href="">Iniciar Sesion con Facebook</a></button>

        
        <input type="email" name="email" id="" placeholder='email' required/>
        <input type="text" name="fullname" id="" placeholder='Nombre completo' required />
        <input type="text" name="username" id="" placeholder='Nombre de usuario' required/>
        <input type="password" name="password" id="" placeholder='Contraseña' required/>

        <p>Es posible que los usuarios de nuestro servicio hayan subido tu información de contacto en Instagram. <a className='link' href="">Mas Informacion</a></p>
        <p>Al registrarte, aceptas nuestras <a className='link' href="">Condiciones</a>, nuestra <a className='link' href="">Política de privacidad</a> y nuestra Política de <a  className='link' href="">Cookies.</a></p>

        <input type="submit" value="Registrarse" />

       
      </form>

    </section>
  )
}

export default registerForm