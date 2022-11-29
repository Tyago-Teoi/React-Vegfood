import "./Footer.css";
import { FormattedMessage } from "react-intl";
import logo  from "./logo-footer.png";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer mt-6 pb-6 has-text-centered">
      <div className="tile is-ancestor">
        <div className="tile is-2 is-parent">
          <div className="tile is-child is-flex is-justify-content-center">
            <figure className="is-flex is-align-items-center image is-128x128">
              <img
                src={logo}
                alt="VegFood's alternate logo: three pigs in a row and red heart in the background"
              ></img>
            </figure>
          </div>
        </div>
        <div className="has-text-centered tile is-vertical is-parent">
          <div className="tile pb-5">
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">
                <FormattedMessage id="footer.about-us" />
              </a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">
                <FormattedMessage id="footer.work-with-us" />
              </a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">
                <FormattedMessage id="footer.register-restaurant" />
              </a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">
                <FormattedMessage id="footer.contact-us" />
              </a>
            </div>
          </div>
          <div className="tile">
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <p className="copyright">© Copyright {currYear} - VegFood</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
