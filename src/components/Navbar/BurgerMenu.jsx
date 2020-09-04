import React, { useState } from "react"
import "./navbar.css"
import { Link } from "gatsby"

const BurgerMenu = () => {
  const [change, setChange] = useState(false)

  const toggleChange = () => {
    setChange(!change)
  }

  return (
    <div class={`${change ? "change" : ""} container`} onClick={toggleChange}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>

      {change && (
        <div className="popout-menu">
          <Link to={"/"}>HOME</Link>
          <Link to={"/portfolio/"}>PORTFOLIO</Link>
          <Link to={"/about/"}>ABOUT</Link>
          <Link to={"/blog/"}>BLOG</Link>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
