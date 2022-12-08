import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BuyCard from "../../components/BuyCard/BuyCard";
import "./Cart.css";

function Cart(props) {
  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      ></NavBar>
      <h1 className="title section-title mt-6 ml-6 mb-6">Carrinho</h1>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="card cart-card mx-auto mb-6">
            <h1 className="title is-4">Endereço de entrega</h1>
            <div className="card cart-internal-card">
              <p>
                Rua Marcondes Paula, n° 336{" "}
                <a className="cart-link" href="/">
                  Mudar endereço
                </a>
              </p>
              <p>São Paulo, SP</p>
              <p>Próximo à UBS</p>
            </div>
          </div>
          <div className="card cart-card mx-auto mb-6">
            <h1 className="title is-4">Método de pagamento</h1>
            <div className="card cart-internal-card">
              <label className="checkbox">
                <input className="check" type="checkbox" />
                Cartão número: ************054-6{" "}
                <a className="cart-link" href="/">
                  Mudar cartão
                </a>
              </label>
              <br />
              <label className="checkbox">
                <input className="check" type="checkbox" />
                Em dinheiro
              </label>
              <br />
              <label className="checkbox">
                <input className="check" type="checkbox" />
                PIX
              </label>
            </div>
          </div>
          <div className="card cart-card mx-auto">
          <h1 className="title is-4">Lista de Compras</h1>
            <BuyCard />
          </div>
        </div>
        <div className="column">
          <div className="card cart-narrow-card mx-auto">
            <h1 className="title is-4">Descrição da Compra</h1>
            <div>
              <div className="card cart-internal-card">
                <table>
                  <tbody>
                    <tr>
                      <td>Items (3)</td>
                      <td className="price">R$ 90,00</td>
                    </tr>
                    <tr>
                      <td>Entrega</td>
                      <td className="price">R$ 5,00</td>
                    </tr>
                    <tr>
                      <td>Taxa de Serviço</td>
                      <td className="price">R$ 0,99</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Preço total:</strong>
                      </td>
                      <td className="price">
                        <strong>R$ 95,99</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                id="end-btn"
                className="button is-fullwidth is-primary is-medium mt-5"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Cart;
