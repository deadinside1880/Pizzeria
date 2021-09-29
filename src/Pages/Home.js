import React from 'react';  
import {Link} from 'react-router-dom';
import BannerImage from '../Assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style= {{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
            <h1>My Pizzaria</h1>
            <p>Blah blah latin text i dont know</p>
            <Link to="/menu">
            <button>
            ORDER NOW
            </button>
            </Link>
            </div>
        </div>
    )
}

export default Home;
