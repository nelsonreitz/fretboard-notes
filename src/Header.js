import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Container">
          <div className="HeaderContent">
            <h1 className="Sitetitle">Fretboard Chart</h1>
            <p className="SiteDescription">Visual chart to learn guitar notes</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;