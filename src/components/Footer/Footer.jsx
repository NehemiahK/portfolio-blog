import React from "react"
import "./footer.css"
import CoffeeButton from "../CofeeButton/CoffeeButton"
import SocialLinks from "../SocialLinks"

const Footer = () => {
  return (
    <div className="footer">
      <SocialLinks />
      <div>© 2020 by Nehemiah Kivelevitz.</div>
    </div>
  )
}

export default Footer
