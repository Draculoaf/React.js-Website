import React, { Component } from "react";
import { Link } from "react-router-dom";

import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default class BlogOne extends Component {
  render() {
    return (
      <div>
        {" "}
        <article class="h-entry">
          <h1 class="p-article-title">JS and Internet Art</h1>
          <p>
            This week we answered some difficult questions centered around this
            idea of “what is art?”. Although it is difficult to say what exactly
            art is, I think that I can reflect for myself about what my own art
            is, and what it means. For example, I enjoy making things which are
            aesthetic and usually do not have a deeper meaning. My art is
            usually produced through crafts such as baking or cooking - that to
            me is an art form. As such, I think that art in a broad sense can
            usually not be defined, however, I feel like it is more valuable to
            categories types of art forms. For example, Deane (2019) speaks
            about internet art and typical features of its sub-categories. I
            would argue that internet art is art which utilises the internet to
            communicate or display its artwork. Therefore, I would argue that a
            website could in and of itself be an artwork - but perhaps this is a
            discussion for another post. We also spoke about the media aspects
            within artworks (technical, basic and qualified), which could help
            us to identify if our artwork could be considered internet artwork.
            Overall, I believe that art cannot be constrained to one definition,
            rather, we can only catagorise it into artworks which have similar
            features.
          </p>
          <p>
            On the technical side, we covered some of the JavaScript
            fundamentals such as how to create functions, and the different
            types of variables and their advantages or disadvantages. Although
            these lectures were useful in learning how to create a JavaScript
            navigation bar, I still felt that I struggled with JavaScript and
            make my own functions without much guidance. I think that it was
            because I lacked the technical vocabulary to do it.
          </p>
          <p>
            <cite>
              [1] DANAE (2019) ‘Net Art, Post-internet Art, New Aesthetics: The
              Fundamentals of Art on the Internet’, DIGITAL ART WEEKLY | Medium,
              31 January
            </cite>
            <time>10 March 2023</time>
          </p>
          <p>
            {" "}
            <Link to="/BlogTwo">
              <button className="blog-button">
                <div className="next-link">
                  <AttachFileOutlinedIcon />
                </div>
                Next blog - APIs and Your Internet Artwork{" "}
              </button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
