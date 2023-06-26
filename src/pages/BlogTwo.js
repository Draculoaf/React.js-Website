import React, { Component } from "react";
import { Link } from "react-router-dom";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default class BlogTwo extends Component {
  render() {
    return (
      <div>
        {" "}
        <article class="h-entry">
          <h1 class="p-article-title">APIs and Your Internet Artwork</h1>
          <p>
            This week we learned how to use API’s and what they are. I found
            that the video lucky made was extremely helpful firstly in helping
            us to understand how to get an API, secondly how to read the data
            the API provides and thirdly how to use the information the API
            provides to change elements within the HTML. Last year, it was
            extremely unclear to use exactly how to use API information because
            the video we received was about file conversions, and using D3.js to
            change CSS, and HTML elements. Overall, this week’s API videos were
            helpful in explaining more about API’s.
          </p>
          <p>
            For my artwork ideas, I thought I would make either something
            relating to animals, shopping or friendship. For my animals idea, I
            wanted to have a photo in which each pixel represents one animal of
            a particular species eg. more endangered species will have a more
            pixelated photo This would be a commentary on the disappearance of
            animals on our planet. My shopping idea would be setup as a shopping
            page where you could see products of luxury brands or fast fashion
            brands, and the longer you spend on the page, the more filled it
            becomes with clothes that are “thrown away”. This would be a
            commentary on fast fashion and the rate at which things are just
            discarded. My last idea is about online friendships. For this idea,
            I would make a page which looks like a social media chat page, and
            it would display the progression of a pair of friends bonding. The
            idea here being that online friendships are just as important as in
            person friendships. Currently, I am leaning towards the online
            friendships artwork because I am more passionate about the message
            and have more of an idea of how I could make a prototype of it for
            our first assignment.
          </p>
          <time>17 March 2023</time>
          <p>
            {" "}
            <Link to="/BlogThree">
              <button className="blog-button">
                <div className="next-link">
                  <AttachFileOutlinedIcon />
                </div>
                Next blog - Internet Artwork Initial Thoughts
              </button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
