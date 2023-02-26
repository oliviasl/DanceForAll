import React from "react";
import Navbar from "../components/Navbar.jsx";
import './Film.css';
import FeaturedCard from "../components/FeaturedCard.jsx";
import FarmerImg from '../assets/farmer.png';

const Feedback = () => {
    return (
        <div>
            <Navbar />
            <div className="film-flex">
                <div className="film-info-container">
                    <h1 className="film-h1">Film Your Video</h1>
                </div>
                <div className="cards-flex">
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'The Farmer',
                        user: 'Instructor',
                        styleType: 'House',
                        name: 'Carolyn Koh',
                        title2: 'Status',
                        description2: 'Incomplete'
                    }}
                    cardImg = {FarmerImg}
                >
                </FeaturedCard>
                </div>
                
            </div>

            
        </div>
    )
}

export default Feedback;