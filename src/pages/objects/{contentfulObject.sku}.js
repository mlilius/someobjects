import React from "react"
import { graphql } from "gatsby"
import ObjectTemplate from "../../templates/object-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Object = ({ data: { contentfulObject } }) => {
  return (
    <>
      <Seo title={contentfulObject.title} />
      <Layout>
        <ObjectTemplate {...contentfulObject} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query objectQuery($id: String) {
    contentfulObject(id: { eq: $id }) {
      title
      introduction
      price
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      description {
        raw
      }
      # faqs {
      #   question
      #   answer {
      #     raw
      #   }
      # }
      gallery {
        gatsbyImageData(
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Object
