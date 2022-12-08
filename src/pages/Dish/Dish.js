import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import dish from "./dish-big.png";
import Card from "../../components/Card/Card";
import { FormattedMessage, useIntl } from "react-intl";
import "./Dish.css";
import { useNavigate } from "react-router-dom";

function Dish(props) {
  const navigate = useNavigate();
  const intl = useIntl();
  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      />
      <div className="columns is-vcentered is-centered mt-6">
        <div className="column">
          <figure className="image dish mx-auto">
            <img
              src={dish}
              alt={intl.formatMessage({
                id: "card.dish",
              })}
            />
          </figure>
        </div>
        <div className="column">
          <div className="content" id="dish-content">
            <h1 className="title is-1">
              <FormattedMessage id="card.dish-name" />
            </h1>
            <p className="dish-description">
              <strong>
                Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </strong>
            </p>
            <h2 className="title is-3 mb-5">R$4,00</h2>

            <div className="dish-info mb-6">
              <a href="/" className="restaurant-link mb-6">
                <FormattedMessage id="card.restaurant-name" />
              </a>
              <p className="subtitle is-5 mt-5"><FormattedMessage id="dish.fee" />: R$6,00</p>
              <p className="subtitle is-5"><FormattedMessage id="dish.time" />: 60 min.</p>
            </div>

            <button onClick={() => navigate("/cart")} className="button is-primary is-medium cart-btn">
              <span className="icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span><FormattedMessage id="dish.add" /></span>
            </button>
          </div>
        </div>
      </div>
      <section id="popular-dishes" className="section centered-section mb-5">
        <h1 className="title section-title mb-6">
          <FormattedMessage id="dish.other-dishes-header" />
        </h1>
        <div className="columns is-multiline">
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dish;
