import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="beta-signup" action="/api/beta-signup" method="POST">
        <input placeholder="Your name..." type="text" name="name" />
        <input placeholder="Your email..." type="email" name="email" />
        <input placeholder="Your Reddit username..." type="text" name="redditUsername" />
        <input placeholder="Landroid Model ex. wr147" type="text" name="landroidModel" />
        <textarea
          placeholder="Your address..."
          name="address"
          rows="5"
        ></textarea>
        <Button text="Signup" />
      </form>
    </ContactStyles>
  )
}

export default Contact
