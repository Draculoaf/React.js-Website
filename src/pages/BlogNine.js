import React, { Component } from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import { Link } from "react-router-dom";

export default class BlogNine extends Component {
  render() {
    return (
      <div>
        <article class="h-entry">
          <h1 class="p-article-title">Internet Art Rationale</h1>

          <p>
            My internet art makes use of the internet, both because of the site
            it is hosted on, on the internet, and through the images used within
            it which are displayed on my website whose source is a link to the
            internet page it is displayed on.
          </p>
          <p>
            I made this artwork because I am passionate about online friendship,
            and I believe they are a valid form of friendship even though it is
            contested as being "fake". So my artwork is a commentary on the pros
            of online friendship, that being the ability to easily initiate
            interactions with potentia new friends, the low maintenence needed
            for these friendships, and of course the intimate connecions which
            people can make with their friends.
          </p>
          <p>
            I do highlight some cautions of online friendship, but this is
            primarily done at the end of the narrative where Simon says "I
            promised the parents we wouldn't do things in private spaces" - here
            I am hinting at the fact that whist we may trust our online friends,
            we should still be cautious when meeting with them for the first
            time.
          </p>
          <p>
            Overall, I am quite happy with the way my artwork turned out. I
            focused more on the narrative aspects, but I couldn't completely
            display the development of a friendship (there would be a lot to
            read, and how do you even know what moments are needed to feel
            "closer" to someone?), however, I am glad that I was able to show
            the growing of frienship through the progressing time stamps, and
            the different way the characters begin to speak to each other.
          </p>

          <p>
            {" "}
            <Link to="/BlogOne">
              <button className="blog-button">
                <div className="next-link">
                  <AttachFileOutlinedIcon />
                </div>
                Back to blog one - JS and Internet Art
              </button>
            </Link>
          </p>
          <p>
            <Link to="/Blog">
              <button className="blog-button">
                <div className="next-link">
                  <CottageOutlinedIcon />
                </div>
                Back to blog page
              </button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
