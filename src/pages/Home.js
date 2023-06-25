import React, { Component } from "react";
import ChatBubbles from "../styles/ChatBubbles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="contentbubbles">
        <div class="container left">
          <div class="content-left">
            <p>Sooo... Tell me what this website is all about!</p>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right">
            <div class="content-right">
              <h2>Jess</h2>
              <p>
                Haha. Alright. This is a website I made for my interactive media
                class. It's all about internet art, and my specific artwork
                centers around online friendships! I hope that it will broaden
                perspectives whilst also allowing me to explore and learn
                React.js.
              </p>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content-left">
            <p>
              Oh wow! That sounds like a fun project. Where can I check out
              these things?
            </p>
          </div>
        </div>

        <div class="proj-div">
          <div class="container right">
            <div class="content-right">
              <h2>Jess</h2>
              <p>
                Well, you can check out the top nagivation bar and click on the
                various tabs. Definitely check out the story I wrote in the
                "art" section!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
