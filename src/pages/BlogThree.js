import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogThree extends Component {
  render() {
    return (
      <div>
        {" "}
        <article class="h-entry">
          <h1 class="p-article-title">Your Internet Artwork</h1>
          <h1 class="p-article-title">Prepatory Work</h1>
          <h2 class="p-sub-head">Themes</h2>
          <p>
            I often make things which do not have that much meaning. I like
            things which are aesthetically pleasing and which appeals to
            cuteness.
          </p>
          <h2 class="p-sub-head">Research</h2>
          <p>
            I like aesthetic things which have a message. Like the image I saw
            of the animals which were represented as pixels in an image. Which
            represented how the animals are disappearing from our frame of
            reference. I really liked that link where it had the concious and
            subconcious thoughts which is highlighted when the cursor hovers
            over the text. The Internet We know is internet art about cookies
            and how the internet harvests your data.
          </p>
          <h2 class="p-sub-head">Brainstorming</h2>
          <p>
            What if I made a meme template which is based on internet culture or
            new internet memes or information - text is automated, commentary on
            gen z humour patterns - Maybe the meme template makes use of some
            buzz words for humour but this needs to be researched. - Maybe an
            internet game? Something simple like a game where you just need to
            jump over obstacles. - What happens if I have something serious and
            then use pop-ups for humour to take away from the seriousness of an
            article. - Data harvesting and how the birds work for the government
            - maybe something about cookies, happiness survey, login page which
            needs an email address to read something or do something.
          </p>
          <h2 class="p-sub-head">Technical constraints</h2>
          <p>
            I think it will be difficult to make all the ideas because they rely
            on information from the internet, and I’m not sure how to connect
            them. Additionally, I’m not sure how I can make those numbers be
            represented in pixels, or how to make the image more or less
            pixelated. I think the meme idea or the cookies idea would be much
            more easy to create because they rely on CSS only and I can make
            predetermined text.
          </p>
          <h2 class="p-sub-head">References</h2>
          <p>
            <cite>
              [1] The Internet We Know from
              https://mikeparkinwits.github.io/wsoa4175a_1894979/
            </cite>
          </p>
          <h1 class="p-article-title">Rationale and Reflection</h1>
          <h2 class="p-sub-head">Description</h2>
          <p>
            My internet artwork is a text message chat between two friends. As a
            user hovers over the blurred out text, the message is revealed to
            them. This is to simulate the same feeling of receiving a text. The
            artwork will also have no footer to simulate the feeling of
            endlessness - because in the story, the people have texted so much
            that it cannot fit onto one page.
          </p>
          <h2 class="p-sub-head">Rationale</h2>
          <p>
            My artwork is a commentary on the discussion about friendships
            formed through online interactions. To me this is important because
            people are moving more towards using technology as an extension of
            themself and a way for them to form their sense of self.
            Additionally, I feel like there is a type of bond which can form
            even if all interactions are facilitated by a digital platform, and
            this bond is often overlooked or undervalued. My Artwork hopes to
            provide stimulation towards the discussion of online friendships.
          </p>
          <h2 class="p-sub-head">Reflection</h2>
          <p>
            Although my artwork turned out in the way I thought it would
            (visually), I feel as though I could make a more compelling artwork
            by using react. For example, I would make it so that a user can
            press a next button which would reveal more of the texts within the
            artwort to make it feel more realistic. Secondly, I feel as though I
            could bring up more topics throughout the text story which people
            have made about online friendships. I feel as though the blurry
            effect is also very disorientating, it makes my eyes sore. In the
            next iterations, I woud like to make the button as I previoulsy
            stated, because I feel like this owuld fix the issue.
          </p>
          <time>24 April 2023</time>
          <p>
            {" "}
            <Link to="/BlogFour">
              <button>Next blog - @mothgenerator</button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
