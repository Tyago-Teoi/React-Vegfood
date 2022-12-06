import { React, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";
import eating from "./eating.png";
import { FormattedMessage, useIntl } from "react-intl";

function Login(props) {
  const intl = useIntl();
  let [currentStep, setCurrentStep] = useState(1);
  let [email, setEmail] = useState("");

  const goToStep = (step) => {
    setCurrentStep(step);
  };

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
            {/* step 1: enter the email*/}

            {currentStep === 1 && (
              <>
                <h1 className="title mb-6 veg-green">
                  <FormattedMessage id="login.step1-header" />
                </h1>
                <div className="field mb-6">
                  <span className="icon-text mb-4">
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <label className="label veg-green">Email</label>
                  </span>
                  <input
                    className="input login-input is-medium"
                    type="text"
                    placeholder={intl.formatMessage({
                      id: "login.email-placeholder",
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <button
                  className="button is-fullwidth is-primary is-medium"
                  id="continue-btn"
                  onClick={() => goToStep(2)}
                >
                  <strong>
                    <FormattedMessage id="login.continue" />
                  </strong>
                </button>
              </>
            )}

            {/* step 2: login*/}
            {currentStep === 2 && (
              <>
                <h1 className="title mb-6 veg-green">
                  <FormattedMessage id="login.step2-header" />
                </h1>
                <div className="field mb-5">
                  <span className="icon-text mb-4">
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <label className="label veg-green">
                      {email}
                    </label>
                  </span>
                  <br></br>
                  <span className="icon-text mb-4">
                    <span className="icon">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <label className="label veg-green">
                      <FormattedMessage id="login.password-label" />
                    </label>
                  </span>
                  <input
                    className="input login-input is-medium mb-5"
                    type="password"
                    placeholder={intl.formatMessage({
                      id: "login.password-placeholder",
                    })}
                  ></input>
                  <a className="forgot-password-link" href="/"><FormattedMessage id="login.forgot-password" /></a>
                </div>
                <button
                  className="button is-fullwidth is-primary is-medium"
                  id="continue-btn"
                >
                  <strong>
                    <FormattedMessage id="nav.log-in" />
                  </strong>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Login;
