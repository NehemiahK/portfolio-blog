import React from "react"
import "./portfolio.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Portfolio() {
  return (
    <Layout background={"#0d1a21"}>
      <SEO title={`Portfolio`} description={`Nehemiah's Portfolio`} />
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery">
          {items.map(item => (
            <PortfolioItem {...item} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const PortfolioItem = props => {
  return (
    <a
      href={props.link}
      key={props.title}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-item"
    >
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </a>
  )
}

const items = [
  {
    title: "fun-react-lib",
    description:
      "Open source React Library aimed at helping people learn open source",
    link: "https://github.com/NehemiahK/fun-react-lib",
    projectType: "github",
  },
  {
    title: "pomo-clock",
    description: "A Pomodoro Clock for time management. Developed in React.",
    link: "https://github.com/NehemiahK/pomo-clock",
    projectType: "github",
  },
  {
    title: "Minecraft-Game",
    description:
      "A 2D version of Minecraft built in HTML/CSS/JavaScript with some jQuery.",
    link: "https://github.com/NehemiahK/Minecraft-Game",
    projectType: "github",
  },
]
