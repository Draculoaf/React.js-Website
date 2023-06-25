import React, { Component } from "react";
import ChatBubbles from "../styles/ChatBubbles.css";
import WW from "../assets/WW.png";
import NWF from "../assets/Nav_WF.png";
import CWF from "../assets/Chat_WF.png";
import WWWF from "../assets/WW_WF.png";

export default class Design extends Component {
  render() {
    return (
      <div>
        <div className="contentbubbles">
          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Welcome to the design page! In here you will find everything
                  you need to know about my thought processes when designing
                  this website. Feel free to ask me any questions.
                </p>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content-left">
              <p>Well, how about this, what did you base your designs on?</p>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Great question. My design is based on WhatsApp Web. In
                  particular I am focusing on the web version because I want to
                  base my design on something which had already been made for
                  the internet browsers and screens. However, WhatsApp Web does
                  not have reponsive design, instead it doesn't allow a user to
                  minimise the screen beyond a particular point, and this made
                  it difficult for me to implement the entire copy of WhatsApp
                  Web.
                </p>
                <p>
                  I've attached an image for you to see what WhatsApp Web looks
                  like on my windows laptop.
                </p>
                <img src={WW} />
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content-left">
              <p>
                That sounds like a fun concept. Did you make wireframes for it?
              </p>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Of course I made wireframes! I have two sets of wireframes.
                  Firstly there is one which is a copy of WhatsApp Web's layout,
                  and then I made wireframes for the planned responsive version,
                  which I ultimately used for the overall design.
                </p>
                <p>
                  This is the wireframe of my copy of WhatsApp Web. As you can
                  see, I scrapped some of the elements which I thought were not
                  necessary to include in this design because I want to convey
                  the feeling of a text messaging app, without having to include
                  things which are there in the actual app for functionality.{" "}
                </p>{" "}
                <img src={WWWF} />
                <p>
                  This is the wireframes for the resonsive version which was
                  repurposed and used for the overall design.{" "}
                </p>
                <img src={NWF} />
                <img src={CWF} />
                <p>
                  The design which I ended up using was based on the "Home page"
                  wireframe. I felt that this conveyed the most imortant aspects
                  of a text messaging app (the call button, the "type here"
                  prompt, and of course the texts on either side of the screen).
                  In my actual website, you can also see that I have added a
                  navigation bar along with the title of my "app" "Howzit". This
                  was because I felt like it was easier for users to go back to
                  the top of screen and press a button to a direct page, as
                  opposed to always having to go back to a "main menu".
                </p>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content-left">
              <p>
                Yeah, ok! That makes sense. What about colour choices and font
                choices? I see you didn't use the blue, grey and white from your
                wireframes, nor the greens of WhatsApp.
              </p>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>

                <p>
                  Yep! You're perfectly correct. I didn't use the grey and blue
                  from my wireframes because it felt too mundane. Instead, I
                  used pink, purple and blue. Specifically: #f1d4e5 (pink),
                  #d0c0ff (purple), and #e1edff(blue). I felt like this made the
                  webiste far more interesting to look at, and I find that this
                  particular combination of colours, which feels reminiscent of
                  unicorns and sunsets, complemented one another.
                </p>
                <p>
                  For the font. I didn't make any additional changes. This is
                  because the text which is used, is easy to read, and generally
                  normal for people to see. I changed the sizing, however, of
                  the H1 headings and the body font because it was a bit
                  difficult for me to easily read when I was tired.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content-left">
              <p>I see. What about interaction then?</p>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Well the main points of interaction for the user would be at
                  the top of the page in the navigation bar. I think it might've
                  been good to add a "back to top" button for people to easily
                  access to menu, or even have the menu be sticky. Alas, I found
                  this more technically challenging than I anticipated.
                </p>
              </div>
            </div>

            <div class="container left">
              <div class="content-left">
                <p>
                  So do yout think you achieved your design goals? What even
                  were they??
                </p>
              </div>
            </div>

            <div class="proj-div">
              <div class="container right">
                <div class="content-right">
                  <h2>Jess</h2>
                  <p>
                    My design goals were to make a website which conveyed the
                    feeling of being on a social media messanger. I think I have
                    successfully done this, especially considering that I was
                    able to implement the things which I thought were necessary
                    to convey that message (for example, the text message
                    bubbles, the "type here" footer, and the profile icon and
                    phone icon).
                  </p>
                </div>
              </div>
            </div>

            <div class="container left">
              <div class="content-left">
                <p>
                  Why are your blogs so different from the rest of your website?
                </p>
              </div>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Good question. It may seem jarring, but I did this because the
                  blogs are also not written in the same style as the rest of
                  the website - in a text like/ chatting like style. So I wanted
                  to have some sort of separation when you open a blog. You'll
                  also notice that the links are in the speech bubble format,
                  however, they are green (#dfefca), further indicating that
                  it's different from the rest of the speech bubbles.
                </p>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content-left">
              <p>
                Looking back at all your design choices, and considering the
                technical difficulties, what do you feel like could be improved
                on your site?
              </p>
            </div>
          </div>

          <div class="proj-div">
            <div class="container right">
              <div class="content-right">
                <h2>Jess</h2>
                <p>
                  Looking back on development, I think that the website would
                  have benefitted a sticky nav bar. This becomes especially
                  troublesome in the long blog posts as you need to constantly
                  scroll back up to get the menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
