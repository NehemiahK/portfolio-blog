import React from "react"

import profilePic from "../../profilepic3.png"
import "./header.css"

import { Link } from "gatsby"
import SocialLinks from "../SocialLinks"

const Header = () => {
  return (
    <header id="header" className="App-header">
      <div className="picture-text">
        <div className="text">
          <div className="name">Hi, I'm Nehemiah</div>
          <div className="tagline">
            <div>
              A Full Stack Developer, maker of stuff, tinkerer of things.
            </div>
            <div className="cta">
              You can see some of that stuff
              <Link to={"/portfolio/"} style={{ marginLeft: 5 }}>
                here
              </Link>
              .
            </div>
          </div>
        </div>
        <div>
          <img src={profilePic} className="profile-pic" alt="profile-pic" />
        </div>
      </div>
      <SocialLinks />
    </header>
  )
}

export default Header
