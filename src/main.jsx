import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "../styles/main.scss"
import Header from "./header.jsx"
import AboutMe from "./about_me.jsx"
import Socials from "./socials.jsx"
import ContactMe from "./contact_me.jsx"

const Main = () => {
  return (
    <Router>
      <div className="main_container">
        <Header />
        <Switch>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
        <Socials />
      </div>
    </Router>
  )
}

export default Main