import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";
import eating from "./eating.png";

function Login(props) {
  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      ></NavBar>
      <div className="columns login-section is-vcentered is-centered">
        <div className="column">
          <figure class="eating mx-auto">
            <img
              src={eating}
              alt="A drawing of two people eating together"
            ></img>
          </figure>
        </div>
        <div className="column">
          <div className="box vegfood-box mx-auto">
            <h1 className="title mb-6 veg-green">Entre ou Crie Sua Conta!</h1>
            <div className="field mb-6">
              <span class="icon-text mb-4">
                <span class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <label className="label veg-green">E-mail ou Celular</label>
              </span>
              <input class="input is-rounded is-medium" type="text"></input>
            </div>
            <button
              class="button is-fullwidth is-primary is-medium"
              id="continue-btn"
            >
              <strong>Continuar</strong>
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Login;
