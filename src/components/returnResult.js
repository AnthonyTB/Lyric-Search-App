import React from "react";
import "../styles/result.css";

export default class returnResult extends React.Component {
  render() {
    const { results } = this.props.state;
    return (
      <main id="results-area">
        <hr className="line" />
        <div id="artistData">
          <i class="fas fa-user"></i>
          {results.artist}
        </div>
        <div id="songData">
          <i class="fas fa-music"></i>
          {results.song}
        </div>
        <p id="song-lyrics">{results.lyrics}</p>
        <hr className="line" />
      </main>
    );
  }
}
