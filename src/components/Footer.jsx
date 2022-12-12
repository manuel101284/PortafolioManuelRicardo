import React from 'react'
import githubIcon from "../assets/img/icon-github.png"
import instagramIcon from "../assets/img/icon-instagram.png"
import twitterIcon from "../assets/img/icon-twitter.png"
import facebookIcon from "../assets/img/icon-facebook.png"

const Footer = () => {
  return (
    <div class="footer01">
            <div className="social" id="social-github"><img src={githubIcon} width="40%"></img></div>
            <div className="social" id="social-instagram"><img src={instagramIcon} width="40%"></img></div>
            <div className="social" id="social-twitter"><img src={twitterIcon} width="40%"></img></div>
            <div className="social" id="social-facebook"><img src={facebookIcon} width="40%"></img></div>
    </div>
  )
}

export default Footer

