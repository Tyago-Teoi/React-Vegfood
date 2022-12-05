import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import "./NavBar.css";
import { LOCALES } from "../../lang/locales";
import logo from "./logo.png";
import { useLocation } from "react-router-dom";

function NavBar(props) {
  const currentRoute = useLocation().pathname;
  const intl = useIntl();
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const activateBurger = () => setIsBurgerActive((prev) => !prev);

  return (
    <>
      <nav
        id="nav-vegfood"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item highlight-on-hover" href="/">
            <img
              src={logo}
              alt="Vegfood's logo: a pig with a heart on the background"
              id="logo-vegfood"
            />
          </a>

          {currentRoute !== "/login" && (
            <a
              onClick={activateBurger}
              role="button"
              className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          )}
        </div>

        {currentRoute !== "/login" && (
          <>
            <div className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
              <div id="search-item" className="navbar-item">
                <p id="search-field" className="control has-icons-left">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder={intl.formatMessage({ id: "nav.search" })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </p>
              </div>

              <a href="/" className="navbar-item is-hidden-desktop">
                <span className="icon">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </span>
                <span>
                  <FormattedMessage id="nav.log-in" />
                </span>
              </a>

              <a href="/" className="navbar-item is-hidden-desktop">
                <span className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>
                  <FormattedMessage id="nav.cart" />
                </span>
              </a>

              <div className="navbar-item">
                <div className="control has-icons-left">
                  <div className="select">
                    <select
                      onChange={props.handleLocaleChange}
                      value={props.currentLocale}
                    >
                      <option value={LOCALES.PORTUGUESE}>PT-BR</option>
                      <option value={LOCALES.ENGLISH}>EN</option>
                    </select>
                  </div>
                  <div className="icon is-small is-left">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-hidden-touch navbar-end">
              <div className="navbar-item">
                <div className="control has-icons-left desktop-select">
                  <div className="select is-rounded">
                    <select
                      onChange={props.handleLocaleChange}
                      value={props.currentLocale}
                    >
                      <option value={LOCALES.PORTUGUESE}>PT-BR</option>
                      <option value={LOCALES.ENGLISH}>EN</option>
                    </select>
                  </div>
                  <div className="icon is-small is-left">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <button className="login-btn button is-primary" id="login-btn">
                  <strong>
                    <FormattedMessage id="nav.log-in" />
                  </strong>
                </button>
              </div>
              <div className="navbar-item highlight-on-hover">
                <a href="/" id="cart-btn">
                  <span className="material-icons" id="cart-icon">
                    shopping_cart
                  </span>
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default NavBar;
