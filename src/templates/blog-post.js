import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./blogpost.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout navbarColor={"#000000b5"}>
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
