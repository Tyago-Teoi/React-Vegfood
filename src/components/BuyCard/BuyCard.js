import React from "react";
import dish from "./dish-image.png";
import "./BuyCard.css";

function BuyCard() {
  return (
    <>
      <div className="card" id="buy-card">
        <div className="columns">
          <div className="column">
            <figure className="image is-square">
              <img src={dish} />
            </figure>
          </div>
          <div className="column buy-column is-three-fifths">
            <h1 className="title is-4">Salada vegana</h1>
            <div className="columns quantity-container">
              <div className="column buy-column">
                <h1 className="title is-6">Quantidade</h1>
                <input type="number" min="1" className="input" />
              </div>
              <div className="column">
                <a className="cart-link" href="/">
                  Excluir produto
                </a>
              </div>
            </div>
          </div>
          <div className="column buy-column">
            <div className="price-container">
              <h1 className="title is-5 mb-2">Preço</h1>
              <p>R$ 10,00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyCard;
