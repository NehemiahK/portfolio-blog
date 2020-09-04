import React from "react"
import Header from "../components/Header/Header.jsx"
import SEO from "../components/seo"

import "../index.css"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout background={"#0d1a21"}>
      <SEO
        title={`Home`}
        description={`A portfolio and blog site by Nehemiah`}
      />
      <Header />
    </Layout>
  )
}
