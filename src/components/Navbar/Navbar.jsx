import React from "react"
import BurgerMenu from "./BurgerMenu"
import { Link, graphql } from "gatsby"

const Navbar = ({ style }) => {
  return (
    <>
      <BurgerMenu />
      <div className="navbar" style={style}>
        <Link to={"/"} className="brand">
          n
        </Link>
        <Link to={"/"}>HOME</Link>
        <Link to={"/portfolio/"}>PORTFOLIO</Link>
        <Link to={"/about/"}>ABOUT</Link>
        <Link to={"/blog/"}>BLOG</Link>
      </div>
    </>
  )
}

export default Navbar
