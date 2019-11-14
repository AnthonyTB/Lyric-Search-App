import React from "react";
import "../styles/form.css";
// import resultReturn from "./returnResult";

function apiHandler(artist, title) {
  const BASE_URL = "https://api.lyrics.ovh/v1";
  fetch(`${BASE_URL}/${artist}/${title}`)
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(e => console.error(e));
}

export default class searchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      song: "",
      lyrics: ""
    };
    this.artistInput = this.artistInput.bind(this);
    this.songInput = this.songInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  artistInput(e) {
    this.setState({ artist: e.target.value });
  }
  songInput(e) {
    this.setState({ song: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `The user is searching for: ${this.state.song} by ${this.state.artist}`
    );
    apiHandler(this.state.artist, this.state.song);
  }

  render() {
    return (
      <section className="form">
        <form id="js-form">
          <label htmlFor="artist-input">Artist</label>
          <input
            type="text"
            id="artist-input"
            placeholder="Yung Pinch"
            onChange={this.artistInput}
          />
          <label htmlFor="song-input">Song</label>
          <input
            type="text"
            id="song-input"
            placeholder="Not Tea"
            onChange={this.songInput}
          />
          <button type="submit" id="submitBtn" onClick={this.onSubmit}>
            search
          </button>
        </form>
      </section>
    );
  }
}
