import React from 'react'
import Weather from './Weather'
import Logo from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="logo">
              <Link to="/"><img src={Logo} alt=""/></Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="header-right">
              <div className="menu">
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/news">News</NavLink></li>
                  <li><NavLink to="/photos">Photos</NavLink></li>
                </ul>
              </div>
              <div className="wheather">
                  <Weather/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header