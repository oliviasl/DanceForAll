import React from "react";
import './Home.css';
import Navbar from "../components/Navbar.jsx";
import PlaceholderImg from "../assets/Placeholder.png";
import StyleCard from "../components/StyleCard.jsx";


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-banner">
                <img className="home-banner-img" src={PlaceholderImg}/>
            </div>
            <h1 className="home-h1">Get Started With...</h1>
            {/* Styles Cards */}
            <div className="home-flex">
                <StyleCard 
                    cardInfo = {{ 
                        img: '',
                        title: 'Breaking',
                        description: 'Breakdancing is a style of street dancing that incorporates coordination, acrobatic and intricate body movements, style, and aesthetics.',
                        styleType: 'freestyle', 
                    }}
                >
                </StyleCard>
            </div>
        </div>
    )
}

export default Home;