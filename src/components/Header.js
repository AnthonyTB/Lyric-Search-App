import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/header.css";

export default class searchForm extends React.Component {
  render() {
    return (
      <header className="form">
        <Link to={"/"}>
          <img src={Logo} alt="Lyric Hunter's Logo" />
        </Link>
      </header>
    );
  }
}
