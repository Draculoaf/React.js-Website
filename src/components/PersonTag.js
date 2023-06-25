import React, { Component } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonName from "../styles/PersonName.css";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default class PersonTag extends Component {
  render() {
    return (
      <div>
        <h1 className="personname">
          Jess{" "}
          <div className="iconleft">
            <Face4OutlinedIcon />
          </div>
          <div className="iconright">
            <SearchOutlinedIcon />
            <LocalPhoneOutlinedIcon />
          </div>
        </h1>
      </div>
    );
  }
}
