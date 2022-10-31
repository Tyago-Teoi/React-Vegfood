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
              alt="VegFood's logo: a pig with a heart on the background"
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
          <div className="navbar-item">
            <input
              class="navbar-item input is-rounded"
              type="text"
              placeholder="Rounded input"
            ></input>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Entrar</strong>
              </a>
              <a>
                <span class="material-icons">shopping_cart</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
