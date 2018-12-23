import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Container">
          <div className="Copyright">
            {new Date().getFullYear()} &copy; <a href="http://nelsonreitz.ch" target="_blank" rel="noopener noreferrer">Nelson Reitz</a>
          </div>
          <a href="http://github.com/nelsonreitz/fretboard" target="_blank" rel="noopener noreferrer">View the source on Github</a>
        </div>
      </footer>
    );
  }
}

export default Footer;