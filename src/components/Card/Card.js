import "./Card.css";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import dish from "./dish-image.png";
import { Link} from "react-router-dom";

const Card = () => {
  const intl = useIntl();

  return (
    <Link to="/dish" className="is-flex is-justify-content-center">
      <div className="card is-flex is-justify-content-center">
        <div className="content">
          <img className="image" src={dish} alt={intl.formatMessage({
                  id: "card.dish",
                })}></img>
          <div className="txt_larger">
            <FormattedMessage id="card.dish-name" />
          </div>
          <div className="txt_smaller">R$ 10,00</div>
          <div className="txt_smaller">
            <FormattedMessage id="card.restaurant-name" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
