import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Container">
          <h1 className="Sitetitle">Fretboard Notes</h1>
          <p className="SiteDescription">Visual chart to learn guitar notes</p>
        </div>
      </header>
    );
  }
}

export default Header;