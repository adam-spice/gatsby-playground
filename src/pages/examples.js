import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

export default examples
