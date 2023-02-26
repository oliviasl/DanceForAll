import React from "react";
import './FeaturedCard.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)({
    padding: 'none',
    color: 'black',
});

const FeaturedCard = ({cardInfo, cardImg}) => {
    const navigate = useNavigate();

    function routing() {
        navigate("/watch/sixstep");
        document.location.reload();
    }

    return (
        <StyledButton onClick={routing}>
            <div className="fcard-container">
                <img className="fcard-img" src={cardImg}/>
                <div className="fcard-hori-flex">
                    <h2 className="fcard-h2">{cardInfo.title}</h2>
                    <h6 className="fcard-h6">{cardInfo.styleType}</h6>
                </div>
                <div className="fcard-hori-flex">
                    <p className="fcard-p-green">{cardInfo.user}</p>
                    <p className="fcard-p">{cardInfo.name}</p>
                </div>
                <div className="fcard-hori-flex">
                    <p className="fcard-p-green">{cardInfo.title2}</p>
                    <p className="fcard-p">{cardInfo.description2}</p>
                </div>
            </div>
        </StyledButton>
    )
}

export default FeaturedCard;