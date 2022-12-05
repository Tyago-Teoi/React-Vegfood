import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";
import eating from "./eating.png";
import { FormattedMessage, useIntl } from "react-intl";

function Login(props) {
  const intl = useIntl();

  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      ></NavBar>
      <div className="columns login-section is-vcentered is-centered">
        <div className="column is-hidden-mobile">
          <figure className="eating mx-auto">
            <img
              src={eating}
              alt={intl.formatMessage({
                  id: "login.eating-together",
                })}
            ></img>
          </figure>
        </div>
        <div className="column">
          <div className="box vegfood-box mx-auto">
            <h1 className="title mb-6 veg-green">
              <FormattedMessage id="login.login-msg" />
            </h1>
            <div className="field mb-6">
              <span className="icon-text mb-4">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <label className="label veg-green">Email</label>
              </span>
              <input
                className="input is-rounded is-medium"
                type="text"
                placeholder={intl.formatMessage({
                  id: "login.email-placeholder",
                })}
              ></input>
            </div>
            <button
              className="button is-fullwidth is-primary is-medium"
              id="continue-btn"
            >
              <strong>
                <FormattedMessage id="login.continue" />
              </strong>
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Login;
