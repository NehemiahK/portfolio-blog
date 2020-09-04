import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, graphql } from "gatsby"

import "./blog.css"

export default function Blog({ data }) {
  return (
    <Layout background={"#1e2b33"}>
      <SEO title={`Blog`} description={`A developer blog by Nehemiah`} />
      <div className="blog">
        <h1>Nehemiah's Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="post">
            <Link to={`${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <div className="date">{node.frontmatter.date}</div>
              <p className="excerpt">{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
