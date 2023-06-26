import React, { Component } from "react";
import { Link } from "react-router-dom";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default class BlogSix extends Component {
  render() {
    return (
      <div>
        <article class="h-entry">
          <h1 class="p-article-title">Ethnocomputing</h1>
          <p>
            For this topic, I will begin by defining “enthocomputing”. Wikipedia
            defines it as: the study of the interactions between computing and
            culture. It includes research on the impact of computing on society,
            as well as the reverse: how cultural, historical, personal, and
            societal origins and surroundings cause and affect the innovation,
            development, diffusion, maintenance, and appropriation of
            computational artifacts or ideas. From the ethnocomputing
            perspective, no computational technology is culturally "neutral,"
            and no cultural practice is a computational void. In other words,
            enthocomputing is the way in which culture effects the way
            technology is designed. In my reading, ‘Skins: Designing Games with
            First Nations Youth’ (2011), they point out some examples where lack
            of representation pushes incorrect or offensive narratives about
            aboriginal people. This example is similar to the indecent in which
            the Google Photo algorithm identified a black person as a gorilla.
            The lack of black developers meant that the testing of the algorithm
            was done with primarily white people, and this caused issues in the
            end product. So yeah, representation and diversity matter when it
            comes to creating things.
          </p>
          <p>
            One thing that I think might be relevant to this topic is the
            phenomenon of “wokeism”. Being “woke” has developed into a term
            which broadly indicates being aware of inequalities, in particular
            racial equalities. However, it has also become linked to other
            politically charged phenomena such as cancel culture, which in this
            case is used to indicate a purist ideology (there is only a set
            right and wrong), and unforgiving punishments for moral offenders.
            Within this, being “woke” has also been attached to ideas of racial
            purity (only a certain race can do certain things). Take a look at
            this video by @chicksonright (2023):
            https://www.instagram.com/reel/Csou3_kg8BK/?igshid=NTc4MTIwNjQ2YQ==
            which exaggerates this connection.
          </p>
          <p>
            In conclusion, there is absolutely a need for more representation
            and more diverse developers in all spheres, but particularly in the
            technology sphere. Additionally, I point out the phenomenon known as
            “wokeism”, and briefly explain, through use of an Instagram reel,
            why being “woke” could start to become detrimental.
          </p>
          <p>
            <cite>
              [1] chicksonright. (2023). Instagram. Taken from
              https://www.instagram.com/reel/Csou3_kg8BK/?igshid=NTc4MTIwNjQ2YQ==
            </cite>
            <cite>
              [2] Lameman, B.A. and Lewis, J.E. (2011) ‘Skins: Designing Games
              with First Nations Youth’.
            </cite>
          </p>
          <p>
            {" "}
            <Link to="/BlogSeven">
              <button>
                <div className="next-link">
                  <AttachFileOutlinedIcon />
                </div>
                Next blog - AI and Art
              </button>
            </Link>
          </p>
        </article>
      </div>
    );
  }
}
