// import React from 'react'
import homeIcon from "../assets/img/home-icon.png"
import aboutmeIcon from "../assets/img/aboutme-icon.png"
import proyectsIcon from "../assets/img/proyect-icon.png"
import cvIcon from "../assets/img/cv-icon.png"
import contacmeIcon from "../assets/img/email-icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <div className="hdr-01">
            <div className="home">
                <Link to="/"><img src={homeIcon} width="80%" height="80%"></img></Link>{" "}
            </div>
            <div className="menu">
                <Link to="/Aboutme"><img src={aboutmeIcon} width="90%" height="90%"></img></Link>{" "}
                <Link to="/Projects"><img src={proyectsIcon} width="90%" height="90%"></img></Link>{" "}
                <Link to="/Curriculum"><img src={cvIcon} width="90%" height="90%"></img></Link>{" "}
                <Link to="/Contactme"><img src={contacmeIcon} width="90%" height="90%"></img></Link>{" "}
            </div>
        </div>
    )
}

export default Navbar