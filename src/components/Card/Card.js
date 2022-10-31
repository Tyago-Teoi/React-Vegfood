import "./Card.css";
import dish from "./dish-image.png";

const Card = () => {
  return (
    <div className="card">
      <img className="image" src={dish}></img>
      <div className="txt_larger">Nome do prato</div>
      <div className="txt_smaller">R$ 4,00</div>
      <div className="txt_smaller">Restaurante</div>
    </div>
  );
};

export default Card;
