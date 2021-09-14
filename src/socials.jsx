import React from "react"
import "boxicons"

const Socials = () => {
  return (
    <div className="socials">
      <a href="mailto:yang.yelun99@gmail.com">
        <box-icon size="lg" name="mail-send"></box-icon>
      </a>
      <a href="https://github.com/eylun" target="_blank" title="GitHub">
        <box-icon type="logo" size="lg" name="github"></box-icon>
      </a>
      <a href="https://www.linkedin.com/in/yyl99/" target="_blank" title="GitHub">
        <box-icon type="logo" size="lg" name="linkedin-square"></box-icon>
      </a>
    </div>
  )
}

export default Socials