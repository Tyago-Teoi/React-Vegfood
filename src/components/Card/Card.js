import "./Card.css";
import { FormattedMessage } from "react-intl";
import dish from "./dish-image.png";

const Card = () => {
  return (
    <a href="/" className="is-flex is-justify-content-center">
      <div className="card is-flex is-justify-content-center">
        <div className="content">
          <img className="image" src={dish} alt="The dish"></img>
          <div className="txt_larger">
            <FormattedMessage id="card.dish-name" />
          </div>
          <div className="txt_smaller">R$ 4,00</div>
          <div className="txt_smaller">
            <FormattedMessage id="card.restaurant-name" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
