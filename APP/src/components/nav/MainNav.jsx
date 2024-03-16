import React from 'react'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//
import '../../css/nav/MainNav.css'

const MainNav = () => {
  return (
    <aside className="aside-nav-container">
        <nav className="aside-nav">
          <h1 className="aside-nav-tittle">Instagram</h1>

          <ul className="aside-nav-ul">
            <li className="aside-nav-li">
              <a className="aside-nav-link" href=""> < FontAwesomeIcon icon="house" className="custom-icon" />Inicio</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href=""> < FontAwesomeIcon icon="magnifying-glass" className="custom-icon" />Busqueda</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="compass" className="custom-icon" />Explorar</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="video" className="custom-icon" />Reels</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon={['fab', 'facebook-messenger']}  className="custom-icon" />Mensajes</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="heart" className="custom-icon" />Notificaciones</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="plus" className="custom-icon" />Crear</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="user" className="custom-icon" />Perfil</a>
            </li>
          </ul>

          <div className="aside-nav-ul">
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="bars" className="custom-icon" />Mas</a>
            </li>
          </div>

        </nav> 

      </aside>
  )
}

export default MainNav