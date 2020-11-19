import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
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

const Header = () => {
  const {
    site: { info: data },
  } = useStaticQuery(query)
  return (
    <div>
      <h1>Title: {data.title}</h1>
      <h1>name: {data.person.name}</h1>
    </div>
  )
}

export default Header
