import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header1">
        <div className="container-menu-header">
          <div className="wrap_header">
            <a href="/" className="logo">
              Happy Shop
            </a>
          </div>
        </div>
        <div className="wrap_header_mobile">
          <a href="/" className="logo-mobile">
            Happy Shop
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
