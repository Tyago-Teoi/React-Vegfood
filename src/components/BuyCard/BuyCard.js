import React from "react";
import dish from "./dish-image.png";
import { FormattedMessage, useIntl } from "react-intl";
import "./BuyCard.css";

function BuyCard() {
  const intl = useIntl();

  return (
    <>
      <div className="card" id="buy-card">
        <div className="columns">
          <div className="column">
            <figure className="image is-square">
              <img src={dish} alt={intl.formatMessage({
                id: "card.dish",
              })}/>
            </figure>
          </div>
          <div className="column buy-column is-three-fifths">
            <h1 className="title is-4">
              <FormattedMessage id="card.dish-name" />
            </h1>
            <div className="columns quantity-container">
              <div className="column buy-column">
                <h1 className="title is-6">
                  <FormattedMessage id="buy-card.quantity" />
                </h1>
                <input type="number" min="1" className="input" />
              </div>
              <div className="column">
                <a className="cart-link" href="/">
                  <FormattedMessage id="buy-card.remove" />
                </a>
              </div>
            </div>
          </div>
          <div className="column buy-column">
            <div className="price-container">
              <h1 className="title is-5 mb-2">
                <FormattedMessage id="buy-card.price" />
              </h1>
              <p>R$ 10,00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyCard;
