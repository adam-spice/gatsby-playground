import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Desktop from "../images/desktop.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "desktop.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "desktop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fluidMaxed: file(relativePath: { eq: "desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const images = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={Desktop} width="100%" alt="dddd" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={images.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={images.fluid.childImageSharp.fluid} />
      </article>
      <Image fluid={images.fluidMaxed.childImageSharp.fluid} />
    </section>
  )
}

export default Images
