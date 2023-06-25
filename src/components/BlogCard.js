import React, { Component } from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";

{
  /*Component not used because links do not work - need help */
}
export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeClassName="active" to="/BlogOne">
          Blog One
        </NavLink>
        <NavLink exact activeClassName="active" to="/BlogTwo">
          Blog Two
        </NavLink>
      </div>
    );
  }
}
