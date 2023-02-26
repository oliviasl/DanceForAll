import React from "react";
import './Home.css';
import Navbar from "../components/Navbar.jsx";
import PlaceholderImg from "../assets/Placeholder.png";
import StyleCard from "../components/StyleCard.jsx";
import FeaturedCard from "../components/FeaturedCard.jsx";
import BreakingImg from '../assets/breaking.png';
import LitefeetImg from '../assets/litefeet.png';
import HouseImg from '../assets/house.png';
import FarmerImg from '../assets/farmer.png';
import SixStepImg from '../assets/sixstep.png';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-banner">
                <img className="home-banner-img" src={PlaceholderImg}/>
            </div>
            <h1 className="home-h1">Get Started With...</h1>
            {/* Styles Cards */}
            <div className="cards-flex">
                <StyleCard 
                    cardInfo = {{ 
                        title: 'Breaking',
                        description: 'Breakdancing is a style of street dancing that incorporates coordination, acrobatic and intricate body movements, style, and aesthetics.',
                        styleType: 'freestyle', 
                    }}
                    cardImg = {BreakingImg}
                >
                </StyleCard>
                <StyleCard 
                    cardInfo = {{ 
                        title: 'Litefeet',
                        description: 'Litefeet or "Getting lite" is a type of street dance that emerged from Harlem. The term comes from dancers dancing as though they have "light feet," or are weightless.',
                        styleType: 'footwork', 
                    }}
                    cardImg = {LitefeetImg}
                >
                </StyleCard>
                <StyleCard 
                    cardInfo = {{ 
                        title: 'House',
                        description: 'From underground clubs in Chicago and New York, House Dance is a footwork-based style influenced by Tap, African dance, Latin dance, and martial arts focusing on improvisation and feeling the music.',
                        styleType: 'footwork', 
                    }}
                    cardImg = {HouseImg}
                >
                </StyleCard>
            </div>
            {/* Featured */}
            <h1 className="home-h1">Featured</h1>
            <div className="cards-flex">
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'The Farmer',
                        styleType: 'House',
                        instructor: 'Carolyn Koh',
                        difficulty: 'Medium', 
                    }}
                    cardImg = {FarmerImg}
                >
                </FeaturedCard>
                <FeaturedCard
                    cardInfo = {{ 
                        title: 'Six Step',
                        styleType: 'Breaking',
                        instructor: 'Jaelin Born',
                        difficulty: 'Easy', 
                    }}
                    cardImg = {SixStepImg}
                >
                </FeaturedCard>
            </div>

        </div>
    )
}

export default Home;