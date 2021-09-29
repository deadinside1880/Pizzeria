import Logo from '../Assets/pizzaLogo.png'
import {Link} from "react-router-dom";  
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import React, {useState} from 'react';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="Navbar">
            <div className="leftSide" id={openLinks? "open" : "close"}>
                <img src={Logo}/>
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar
