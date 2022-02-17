import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";

class Navbar extends Component {
  state = { active: false };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={logo} alt=""></img>
      </nav>
    );
  }
}

export default Navbar;
