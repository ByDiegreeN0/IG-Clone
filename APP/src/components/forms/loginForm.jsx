import axios from 'axios';
import { useHistory } from "react-router-dom";

import React from "react";
import Formfooter from "../footer/LoginFormFooter";

import "../../css/forms/loginForm.css";
import "../../css/global/globalStyles.css";
import IgCloneIMG from "../../assets/img/loginForm/Main.jpg";

const LoginForm = () => {
  const endPoint = "localhost:8000/api/user/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {

      axios.post(endPoint, {email, password})
      const token = response.data.token
      localStorage.setItem('token', token)
      history.push('/main')

    } catch (error) {
      console.error('error')
    }
  };

  return (
    <div className="loginform-main">
      <section className="loginForm-container">
        <div className="loginForm-img">
          <img src={IgCloneIMG} alt="" />
        </div>

        <div className="loginForm-form">
          <div className="loginForm-container">
            <form action="">
              <h1 className="loginForm-tittle">IG-Clone</h1>

              <label htmlFor="name">
                <input
                  className="loginForm-control"
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="correo electronico"
                />
              </label>

              <label htmlFor="password">
                <input
                  className="loginForm-control"
                  type="password"
                  name="password"
                  id=""
                  required
                  placeholder="Contraseña"
                />
              </label>

              <input
                type="submit"
                className="loginForm-form-btn btn"
                value="Iniciar Sesión"
              />

              <p className="loginForm-delimiter">o</p>

              <p className="loginForm-link">
                <a href="" className="link-fb">
                  Iniciar Sesion con Facebook
                </a>
              </p>
              <p className="password-link">
                <a className="link" href="">
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
            </form>
          </div>

          <div className="register-button">
            <p className="register-button-p">
              ¿No tienes una cuenta?{" "}
              <a className="link" href="">
                Registrate
              </a>
            </p>
          </div>
        </div>
      </section>

      <Formfooter />
    </div>
  );
};

export default LoginForm;
