import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function Layout({
  children,
  background,
  navbarColor = "#0d1a222e",
}) {
  return (
    <div style={{ background }}>
      <Navbar style={{ background: navbarColor }} />
      {children}
      <Footer />
    </div>
  )
}
