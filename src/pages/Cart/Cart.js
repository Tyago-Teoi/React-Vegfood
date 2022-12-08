import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BuyCard from "../../components/BuyCard/BuyCard";
import { FormattedMessage } from "react-intl";
import * as bulmaToast from "bulma-toast";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Cart.css";

function Cart(props) {
  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      ></NavBar>
      <h1 className="title section-title mt-6 ml-6 mb-6">
        <FormattedMessage id="cart.header" />
      </h1>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="card cart-card mx-auto mb-6">
            <h1 className="title is-4">
              <FormattedMessage id="cart.address" />
            </h1>
            <div className="card cart-internal-card">
              <p>
                Rua Marcondes Paula, n° 336{" "}
                <a className="cart-link" href="/">
                  <FormattedMessage id="cart.change-address" />
                </a>
              </p>
              <p>São Paulo, SP</p>
              <p>Próximo à UBS</p>
            </div>
          </div>
          <div className="card cart-card mx-auto mb-6">
            <h1 className="title is-4">
              <FormattedMessage id="cart.payment-method" />
            </h1>
            <div className="card cart-internal-card">
              <label className="checkbox">
                <input className="check" type="checkbox" />
                <FormattedMessage id="cart.card" /> ************054-6{" "}
                <a className="cart-link" href="/">
                  <FormattedMessage id="cart.change-card" />
                </a>
              </label>
              <br />
              <label className="checkbox">
                <input className="check" type="checkbox" />
                <FormattedMessage id="cart.cash" />
              </label>
              <br />
              <label className="checkbox">
                <input className="check" type="checkbox" />
                PIX
              </label>
            </div>
          </div>
          <div className="card cart-card mx-auto">
            <h1 className="title is-4">
              <FormattedMessage id="cart.shopping-list" />
            </h1>
            <BuyCard />
          </div>
        </div>
        <div className="column">
          <div className="card cart-narrow-card mx-auto">
            <h1 className="title is-4">
              <FormattedMessage id="cart.desc" />
            </h1>
            <div>
              <div className="card cart-internal-card">
                <table>
                  <tbody>
                    <tr>
                      <td>Items (3)</td>
                      <td className="price">R$ 90,00</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage id="dish.fee" />
                      </td>
                      <td className="price">R$ 5,00</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage id="cart.service-fee" />
                      </td>
                      <td className="price">R$ 0,99</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <FormattedMessage id="cart.total-price" />:
                        </strong>
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
                onClick={() => {
                  bulmaToast.toast({
                    message: intl.formatMessage({id: "cart.success"}),
                    type: "is-success",
                    position: "top-center",
                  });
                  navigate("/");
                }}
              >
                <FormattedMessage id="cart.checkout" />
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
