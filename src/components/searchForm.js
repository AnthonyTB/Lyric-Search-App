import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

export default class searchForm extends React.Component {
  render() {
    const artist = this.props.state.artist.replace(/ +/g, "");
    const song = this.props.state.song.replace(/ +/g, "");

    return (
      <section className="form">
        <form id="js-form">
          <input
            type="text"
            id="artist-input"
            placeholder="Artist Name"
            value={this.props.state.artist}
            onChange={e => this.props.artistInput(e.target.value)}
          />
          <input
            type="text"
            id="song-input"
            placeholder="Song Name"
            value={this.props.state.song}
            onChange={e => this.props.songInput(e.target.value)}
          />

          <button type="submit" id="submitBtn" onClick={this.props.onSubmit}>
            <Link to={`/${artist}/${song}`}>search</Link>
          </button>
        </form>
      </section>
    );
  }
}
