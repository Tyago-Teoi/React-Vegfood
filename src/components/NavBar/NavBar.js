import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav
        id="nav-vegfood"
        class="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="http://localhost:3000/logo.png"
              alt="Vegfood's logo: a pig with a heart on the background"
              id="logo-vegfood"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div id="search-item" className="navbar-item">
            <p id="search-field" class="control has-icons-left">
              <input
                class="input is-rounded"
                type="text"
                placeholder="Buscar restaurantes ou pratos..."
              />
              <span class="icon is-small is-left">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </p>
          </div>
        </div>

        <div class="navbar-end">
          <div className="navbar-item">
            <a class="button is-primary" id="login-btn">
              <strong>Entrar</strong>
            </a>
          </div>
          <div class="navbar-item" >
            <a id="cart-btn">
              <span class="material-icons" id="cart-icon">
                shopping_cart
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
