import React from "react";
import './StyleCard.css';

const StyleCard = ({cardInfo, cardImg}) => {
    return (
        <div className="card-container">
            <img className="card-img" src={cardImg}/>
            <h2 className="card-h2">{cardInfo.title}</h2>
            <p className="card-p">{cardInfo.description}</p>
            <h6 className="card-h6">{cardInfo.styleType}</h6>
        </div>
    )
}

export default StyleCard;