import React from 'react'
import { Link } from 'react-router-dom'
import './siteHeader.scss'
import Logo from '../../assets/img/logo.svg'

export default function SiteHeader() {
    return(
        <header className="App-header">
          <img className="App-logo" src={Logo} alt="Site Logo"/>
          <nav className="App-navigation">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/users">Test</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}