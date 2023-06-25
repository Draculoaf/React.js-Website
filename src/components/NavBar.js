import React, { Component } from "react";
import Logo from "../assets/Logo2.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftside">
          <img src={Logo} />
          <h1 className="websitename">Howzit!</h1>
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
        </div>
      </div>
    );
  }
}
