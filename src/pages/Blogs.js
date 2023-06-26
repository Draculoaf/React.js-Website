import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import BlogOne from "./BlogOne.js";
import ChatBubbles from "../styles/ChatBubbles.css";
import NavBarStyle from "../styles/Navbar.css";
import BlogStyle from "../styles/Blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="contentbubbles">
        <div class="proj-div">
          <div class="container right">
            <div class="content-right">
              <h2>Jess</h2>
              <p>Click on any of the words below to go to a blog post!</p>
            </div>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right">
            <div class="content-right navbar content-blog">
              <NavLink exact activeClassName="active" to="/BlogOne">
                JS and Internet Art
              </NavLink>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content-left navbar content-blog">
            <NavLink exact activeClassName="active" to="/BlogTwo">
              APIs and your internet artwork
            </NavLink>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right ">
            <div class="content-right navbar content-blog">
              <NavLink exact activeClassName="active" to="/BlogThree">
                Internet artwork initial thoughts
              </NavLink>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content-left navbar content-blog">
            <NavLink exact activeClassName="active" to="/BlogFour">
              @mothgenerator
            </NavLink>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right ">
            <div class="content-right navbar content-blog">
              <NavLink exact activeClassName="active" to="/BlogFive">
                African Digital Art
              </NavLink>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content-left navbar content-blog">
            <NavLink exact activeClassName="active" to="/BlogSix">
              Ethnocomputing
            </NavLink>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right ">
            <div class="content-right navbar content-blog">
              <NavLink exact activeClassName="active" to="/BlogSeven">
                AI and Art
              </NavLink>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content-left navbar content-blog">
            <NavLink exact activeClassName="active" to="/BlogEight">
              Internet Art Research
            </NavLink>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right ">
            <div class="content-right navbar content-blog">
              <NavLink exact activeClassName="active" to="/BlogNine">
                Internet Art Rationale
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
