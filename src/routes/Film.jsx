import React from "react";
import Navbar from "../components/Navbar.jsx";
import './Film.css';
import FeaturedCard from "../components/FeaturedCard.jsx";
import FarmerImg from '../assets/farmer.png';
import Button from '@mui/material/Button';

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
                            description2: 'Incomplete',
                            
                        }}
                        cardImg = {FarmerImg}
                    >
                    </FeaturedCard>
                </div>
                <Button
                    component="label"
                    variant="outlined"
                    sx={{ marginRight: "1rem", color: "black", borderColor: "black", "&:hover": {borderColor: "black"}}}
                    
                >
                    Upload Video
                    <input type="file" accept=".mov" hidden/>
                </Button>
            </div>
            

            
        </div>
    )
}

export default Feedback;