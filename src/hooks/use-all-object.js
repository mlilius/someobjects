import { graphql, useStaticQuery } from "gatsby"

const useAllObject = () => {
  const {
    allContentfulObject: { nodes },
  } = useStaticQuery(graphql`
    query allObjectLinksQuery {
      allContentfulObject(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/objects/{contentfulObject.sku}")
          introduction
          sku
          url
          slug
          price
          description {
            raw
          }
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllObject
