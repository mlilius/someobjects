import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedObject"
import useFeaturedObject from "../../hooks/use-featured-object"
import Button from "../Button/Button"

const Features = ({ title, introduction }) => {
  const featuredProduct = useFeaturedObject()

  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/objects" text="All Objects" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features
