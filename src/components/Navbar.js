import React from "react"
import { Link, NavLink, withRouter } from "react-router-dom"

const Navbar = (/*props*/) => {
  // setTimeout(()=>{
  //     props.history.push('/about')
  // }, 2000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          React router
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
// higher order components are functions that adds features to a components

// higher order components withRoute
// it adds the props of NavLink and Link to a component
export default withRouter(Navbar)
