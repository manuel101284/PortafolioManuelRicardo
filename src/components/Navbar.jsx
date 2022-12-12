import React from 'react'
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
                <Link to="../pages/Home.jsx"><img src={homeIcon} width="80%" height="80%"></img>Home</Link>
            </div>
            <div className="menu">
                <Link to="../pages/Aboutme.jsx"><img src={aboutmeIcon} width="90%" height="90%"></img>Aboutme</Link>
                <Link to="../pages/Projects.jsx"><img src={proyectsIcon} width="90%" height="90%"></img>Projects</Link>
                <Link to="../pages/Curriculum.jsx"><img src={cvIcon} width="90%" height="90%"></img>Curriculum</Link>
                <Link to="../pages/Contactme.jsx"><img src={contacmeIcon} width="90%" height="90%"></img>Contactme</Link>
            </div>
        </div>
    )
}


// const Header = () => {
//     return (
//         <div className="hdr-01">
//             <div className="home">
//                 <div id="btn-home"><a><img src={homeIcon} width="80%" height="80%"></img></a></div>
//             </div>
//             <div className="menu">
//                 <div id="btn-aboutme"><a><img src={aboutmeIcon} width="90%" height="90%"></img></a></div>
//                 <div id="btn-proyects"><a><img src={proyectsIcon} width="90%" height="90%"></img></a></div>
//                 <div id="btn-cv"><a><img src={cvIcon} width="90%" height="90%"></img></a></div>
//                 <div id="btn-contactme"><a><img src={contacmeIcon} width="90%" height="90%"></img></a></div>
//             </div>
//         </div>
//     )
// }

export default Navbar