import React from "react";
import './StyleCard.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    color: 'black',
    fontFamily: "Roboto",
    fontStyle: 'normal',
    marginRight: '5vw',
    borderRadius: "5px",
});

const StyleCard = ({cardInfo}) => {
    return (
        <div className="card-container">
            <img src={cardInfo.img}/>
            <h2 className="card-h2">{cardInfo.title}</h2>
            <p className="card-p">{cardInfo.description}</p>
            <h6 className="card-h6">{cardInfo.styleType}</h6>
        </div>
    )
}

export default StyleCard;