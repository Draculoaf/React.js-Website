import React, { Component } from "react";
import Logo from "../assets/Logo2.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { openLinks: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      openLinks: !prevState.openLinks,
    }));
  }

  render() {
    return (
      <div className="navbar">
        <div className="leftside " id={this.state.openLinks ? "open" : "close"}>
          <img src={Logo} />

          <div className="hiddenLink">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active" to="/Design">
              Design
            </NavLink>
            <NavLink exact activeClassName="active" to="/Art">
              Art
            </NavLink>
            <NavLink exact activeClassName="active" to="/Blog">
              Blogs
            </NavLink>
          </div>
        </div>

        <div className="links ">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" to="/Design">
            Design
          </NavLink>
          <NavLink exact activeClassName="active" to="/Art">
            Art
          </NavLink>
          <NavLink exact activeClassName="active" to="/Blog">
            Blogs
          </NavLink>
          <button className="u-burger" onClick={this.toggleNav}>
            <MenuOutlinedIcon />
          </button>
        </div>
      </div>
    );
  }
}
