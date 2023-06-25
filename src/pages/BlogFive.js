import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogFive extends Component {
  render() {
    return (
      <div>
        <article class="h-entry">
          <h1 class="p-article-title">African Digital Art</h1>
          <p>
            For this section I read the article titled “The Impact of Instagram
            in the Works of Emerging South African Artists’”. In it the authors
            mention many of the pros and cons of using Instagram to gain
            interest in their works. This makes sense because social media
            allows people to connect to a broader audience, especially when
            using hashtags and paying for promotional adverts. The authors also
            mention that doing this can be time consuming and draining, which
            hinders mental health and pursuit of passions.
          </p>
          <p>
            I think that the situation in which prosumers (those who both
            consume and produce content/products), find themselves is often one
            of precarity. I say this firstly because, although the hours one
            puts into their profile can be flexible, the following generated
            through social media usually causes the artist to become freelance
            by accepting commissions. This lack of job stability can be highly
            stressful as the artist is forced to spend additional time
            advertising themselves. Authors such as Greig de Peuter (2011)
            further explain and detail the kinds of hardships faced by those in
            the creative economy. Furthermore, I think that there is a sense of
            “personal brand” (Leary, 2019) when one uses social media to make
            money. An artists’ works create a specific type of feeling, and this
            is usually reflected throughout their entire profile, creating a
            specific aesthetic. However, the “personal brand” also extends
            beyond the realms of social media, and into their personal life,
            which usually means that they are consistently working to keep up
            with the “brand” image. I think this is something which would've
            been worthwhile mentioning in the research. Additionally, I think
            that it should’ve become clearer in the research that the ability to
            use platforms such as Instagram is something which artists with
            privilege can do, however, especially within the South African
            context, this is not the case for most artists who have to deal with
            loadshedding, and having no accessibility to such platforms due to
            things like loadshedding, finances, etc.
          </p>
          <p>
            In conclusion, although this article works to establish useful pros
            and cons of using Instagram for artists to become more well-known, I
            feel that in the South African context, that they have left out
            important points about prosumption, and privilege.{" "}
          </p>
          <p>
            <cite>
              [1] de Peuter, G., 2011. Creative Economy and Labor Precarity: A
              Contested Convergence. Journal of Communication Inquiry 35,
              417–425. https://doi.org/10.1177/0196859911416362
            </cite>
            <cite>
              [2] Leary, J.P., 2019. Keywords: The New Language of Capitalism.
              Haymarket Books.
            </cite>
            <cite>
              [3] Xaba, S., Fang, X. and Shah, D., 2021. ‘The Impact of
              Instagram in the Works of Emerging South African Artists’,
              Advances in Social Science, Education and Humanities Research,
              568.
            </cite>
          </p>
          <p>
            {" "}
            <Link to="/BlogSix">
              <button>Next blog - Ethnocomputing</button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
