import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogEight extends Component {
  render() {
    return (
      <div>
        <article class="h-entry">
          <h1 class="p-article-title">Internet Art Research</h1>

          <p>
            Online friendships have become a debate with many perspectives. On
            one hand, some sources (Unknown, 2020) argue that online friendships
            do not allow for intimate connections to form, do not provide a
            person with support, make space for inauthentic selves, and may be
            dangerous as someone could take advantage. On the other hand, the
            same author argues that online friendships are easy to form, do not
            require time or effort, are less pressurising (for people who have
            social anxiety, and online friends can keep a person company at any
            time of day). I do not personally agree with most of the cons which
            are listed by this particular author. It feels as if they have not
            themselves had an online friendship, nor have researched those who
            have – speaking from personal experience.
          </p>
          <p>
            Whereas the Regain Editorial Team provides another perspective. They
            mention the pros of online friends: mutual interests, friends from
            across the globe, easier to get to know one another, and easier to
            break the ice. The cons they mention pertain mostly to the
            maintenance of these friends. They mention that miscommunication is
            more likely, bonding time might become more difficult, it is more
            difficult to make up and online friends could disappear. This is not
            to say that they don’t mention other dangers such as the potential
            for dangers by people who are being inauthentic.
          </p>
          <cite>
            [1] Regain Editorial Team. (2023). Online:
            https://www.regain.us/advice/friendship/are-friends-online-as-legitimate-as-real-life-friends/{" "}
          </cite>
          <cite>
            [2] Unknown. (2020). Online:
            https://thedigitalchain.com/social-media-friends-vs-real-life-friends/{" "}
          </cite>
          <p>
            {" "}
            <Link to="/BlogOne">
              <button>Back to blog one - JS and Internet Art</button>
            </Link>
          </p>
          <p>
            <Link to="/Blog">
              <button>Back to blog page</button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
