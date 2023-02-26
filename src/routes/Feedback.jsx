import React from "react";
import Navbar from "../components/Navbar.jsx";
import './Feedback.css';
import FeaturedCard from "../components/FeaturedCard.jsx";
import FarmerImg from '../assets/farmer.png';
import SixStepImg2 from '../assets/6step.webp';
import ArmCircleImg from '../assets/armcircle.jpg';
import CatwalkImg from '../assets/catwalk.jpg';
import FreezeImg from '../assets/freeze.webp';
import WristWaackImg from '../assets/wristwaack.jpg';

const Feedback = () => {
    return (
        <div>
            <Navbar />
            <div className="feedback-flex">
                <div className="feedback-info-container">
                    <h1 className="feedback-h1">Give Feedback</h1>
                    <h3 className="feedback-h3">Recent</h3>
                </div>
                <div className="cards-flex">
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'The Farmer',
                        user: 'Student',
                        styleType: 'House',
                        name: 'Jameson Park',
                        title2: 'Submitted',
                        description2: '2/25/23'
                    }}
                    cardImg = {FarmerImg}
                >
                </FeaturedCard>
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'Catwalk',
                        user: 'Student',
                        styleType: 'Voguing',
                        name: 'Allison Amani',
                        title2: 'Submitted',
                        description2: '2/26/23',
                    }}
                    cardImg = {CatwalkImg}
                >
                </FeaturedCard>
            
                </div> 
                <div className="feedback-info-container">
                    <h3 className="feedback-h3">Styles</h3>
                    <h4 className="feedback-h4">Breakdance</h4>
                </div>
                <div className="cards-flex">
                <FeaturedCard
                    cardInfo = {{ 
                        title: '6-Step',
                        user: 'Student',
                        styleType: 'Breaking',
                        name: 'Anna Sullivan',
                        title2: 'Submitted',
                        description2: '2/25/23'
                    }}
                    cardImg = {SixStepImg2}
                >
                </FeaturedCard>
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'Freeze',
                        user: 'Student',
                        styleType: 'Breaking',
                        name: 'Oliver Johnson',
                        title2: 'Submitted',
                        description2: '2/26/23',
                    }}
                    cardImg = {FreezeImg}
                >
                </FeaturedCard>
            
                </div> 
                <div className="feedback-info-container">
                    <h4 className="feedback-h4">Waacking</h4>
                </div>
                <div className="cards-flex">
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'Arm Circle',
                        user: 'Student',
                        styleType: 'Waacking',
                        name: 'Suzy Lee',
                        title2: 'Submitted',
                        description2: '2/25/23'
                    }}
                    cardImg = {ArmCircleImg}
                >
                </FeaturedCard>
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'Wrist Waack',
                        user: 'Student',
                        styleType: 'Waacking',
                        name: 'Juliana Lin',
                        title2: 'Submitted',
                        description2: '2/26/23',
                    }}
                    cardImg = {WristWaackImg}
                >
                </FeaturedCard>
            
                </div> 

            </div>

            
        </div>
    )
}

export default Feedback;