import "./Card.css";
import dish from "./dish-image.png";

const Card = () => {
  return (
    <a href="/">
      <div className="card is-flex is-justify-content-center">
        <div className="content">
          <img className="image" src={dish} alt="The dish"></img>
          <div className="txt_larger">Nome do prato</div>
          <div className="txt_smaller">R$ 4,00</div>
          <div className="txt_smaller">Restaurante</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
