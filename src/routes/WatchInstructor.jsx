import React from "react";
import Navbar from "../components/Navbar.jsx";
import Video1 from "../assets/sixstep.mov";
import './WatchCritique.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';

const StyledButton = styled(Button)({
    color: 'black',
    fontSize: '24px',
    marginTop: '3vh',
});

const StyledLinkedCameraIcon = styled(LinkedCameraIcon)({
    color: 'black',
    marginLeft: '1vw',
    marginTop: '-5px',
});

const WatchInstructor = () => {
    return (
        <div>
            <Navbar />
            <div className="watch-flex">
                <div className="watch-info-container">
                    <h1 className="watch-h1">6-Step</h1>
                </div>
                <video src={Video1} width="1000px" height="600px" controls="controls" autoPlay={false}></video>
            
                <div className="watch-info-container">
                    <div className="watch-spaced-flex">
                        <h2 className="watch-h2">Breaking</h2>
                        <StyledButton>Now It's Your Turn! <StyledLinkedCameraIcon /></StyledButton>
                    </div>
                    <div className="watch-hori-flex">
                        <h6 className="watch-h6-green">Instructor</h6>
                        <h6 className="watch-h6">Jaelin Born</h6>
                    </div>
                    <div className="watch-hori-flex">
                        <h6 className="watch-h6-green">Difficulty</h6>
                        <h6 className="watch-h6">Medium</h6>
                    </div>
                    <h3 className="watch-h3">About Jaelin</h3>
                    <p className="watch-p">
                        Jaelin is dancer from Maryland currently studying at USC 
                        Glorya Kaufman School of Dance. They have background in a 
                        variety of styles, including breaking, hip-hop, and contemporary 
                        from studio and convention training. Currently, they are a 
                        choreographer on Chaotic3, a competitive dance team at USC.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WatchInstructor;