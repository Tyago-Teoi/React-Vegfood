import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <img className="image" src="image7.png"></img>
            <div className="txt_larger">Nome do prato</div>
            <div className="txt_smaller">R$ 4,00</div>
            <div className="txt_smaller">Restaurante</div>
        </div>
    )
}

export default Card;