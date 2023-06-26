import React, { Component } from "react";
import { Link } from "react-router-dom";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default class BlogSeven extends Component {
  render() {
    return (
      <div>
        {" "}
        <article class="h-entry">
          <h1 class="p-article-title">AI and Art</h1>
          <p>
            The conversation around AI and art has become a complex one with
            many dynamics to consider. For example, there are many questions
            surrounding who “owns” the art, who is the “artist”, can machines
            create, etc. After reading ‘Can Artificial Intelligence Make Art
            without Artists? Ask the Viewer’ (2019), I think that machines can
            create art, and we have given them the tools and logic to do so. Of
            course, there will be ethical concerns about what tools we teach
            these machines, and how will we keep track of intellectual property,
            but I think this is a different conversation altogether.
          </p>
          <p>
            When referring to AI programs which help in the process of creation,
            I noticed that people often speak about the programs as a separate
            entity with which they worked. For example, this song created using
            ChatGPT is title with the words ‘songwriting with ChatGPT’ (emphasis
            my own) and can be found at
            https://www.youtube.com/watch?v=S9FaadbHvL4. Furthermore, even when
            conversing with other people, one tends to say, “I asked ChatGPT to
            do…”, which has a sort of separation from algorithm. In other words,
            I argue that people do not see AI as the program which makes it
            function, but rather as an entity which can assist them with their
            own creation.
          </p>
          <p>
            <cite>
              [1]Audry, S. and Ippolito, J. (2019) ‘Can Artificial Intelligence
              Make Art without Artists? Ask the Viewer’, Arts, 8(1), p. 35.
              Available at: https://doi.org/10.3390/arts8010035Links to an
              external site..
            </cite>
            <cite>
              [2] Tom McGovern. (2023). ‘Songwriting with Chat GPT: An Irish pub
              song about ripping a solid fart’. Taken from
              https://www.youtube.com/watch?v=S9FaadbHvL4
            </cite>
          </p>
          <p>
            {" "}
            <Link to="/BlogEight">
              <button className="blog-button">
                <div className="next-link">
                  <AttachFileOutlinedIcon />
                </div>
                Next blog - Internet Art Research
              </button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
