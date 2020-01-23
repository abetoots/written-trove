import React from "react"
import "./Logo.scss"
import logo from "../../../content/assets/writtentrove_logo-pilot.svg"

const Logo = props => (
  <div className="Logo">
    <img
      className="Logo__img"
      src={logo}
      alt={props.alt ? `${props.alt} logo` : "Site Logo"}
    />
  </div>
)

export default Logo
