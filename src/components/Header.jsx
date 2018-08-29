import React, { Component } from 'react'
import Navbar from './Navbar.jsx'

class Header extends Component {

  render() {
    return (
      <header>
        <section style={{minHeight: "59px"}}>
          <div className="container">
            <div className="row">
              <Navbar />
            </div>
          </div>
        </section>
      </header>
    )
  }

}

export default Header
