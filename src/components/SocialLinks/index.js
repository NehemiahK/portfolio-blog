import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faFreeCodeCamp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./sociallinks.css"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://twitter.com/NehemiahKiv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.linkedin.com/in/nehemiah-kivelevitz-48b88a10a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.freecodecamp.org/news/author/nehemiah/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </a>
      <a
        href="https://github.com/NehemiahK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="mailto:nehemiahkiv@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  )
}

export default SocialLinks
