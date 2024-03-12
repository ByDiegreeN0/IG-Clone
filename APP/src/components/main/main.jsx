import React from "react";

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Post from "./post";
import Stories from "./stories";
import ProfileLink from "./profile/ProfileLink";

import '../../css/main/main.css'


const Main = () => {
  return (
    <section className="main-box">
      <aside className="aside-nav-container">
        <nav className="aside-nav">
          <h1 className="aside-nav-tittle">IG-Clone</h1>

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
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="house" className="custom-icon" />Mensajes</a>
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

      <section className="post">
        <Stories />
        <Post />
      </section>

      <section className="right-aside">
        <p>Sugerencias para ti</p>
        <ProfileLink />
      </section>
    </section>
  );
};

export default Main;
