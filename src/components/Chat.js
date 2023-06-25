import React, { Component } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Style from "../styles/Chat.css";

export default class Chat extends Component {
  render() {
    return (
      <div>
        <footer className="chat">
          <div className="type">Type a message</div>{" "}
          <div className="send">
            <SendOutlinedIcon />
          </div>
        </footer>
      </div>
    );
  }
}
