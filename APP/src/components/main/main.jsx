import React from "react";

import Post from "./post";
import Stories from "./stories";

import '../../css/main/main.css'

const Main = () => {
  return (
    <section className="main-box">
      <aside className="aside-nav-container">
        <nav className="aside-nav">
          <h1 className="aside-nav-tittle">IG-Clone</h1>

          <ul className="aside-nav-ul">
            <li  className="aside-nav-li">
              <a className="aside-nav-link" href="">Inicio</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Busqueda</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Explorar</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Reels</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Mensajes</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Notificaciones</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Crear</a>
            </li>
            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">Perfil</a>
            </li>

            <div className="ul-secondary">
              <li className="aside-nav-li">
                <a className="aside-nav-ul" href="">Mas</a>
              </li>
            </div>
          </ul>
        </nav>
      </aside>

      <section className="post">
        <Stories />
        <Post />
      </section>

      <section className="right-aside">
        <h1>test</h1>
      </section>
    </section>
  );
};

export default Main;
