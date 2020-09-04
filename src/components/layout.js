import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function Layout({ children, background }) {
  return (
    <div style={{ background }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
