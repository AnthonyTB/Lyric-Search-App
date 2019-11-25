import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";

export default class returnResult extends React.Component {
  state = {
    results: {
      artist: "",
      song: "",
      lyrics: ""
    },
    error: ""
  };

  componentDidMount() {
    const BASE_URL = "https://api.lyrics.ovh/v1";
    fetch(`${BASE_URL}/${this.props.state.artist}/${this.props.state.song}`)
      .then(res => res.json())
      .then(resJson => {
        if (resJson.error) {
          this.setState({
            error: resJson.error
          });
        } else {
          this.setState({
            results: {
              artist: this.props.state.artist,
              song: this.props.state.song,
              lyrics: resJson.lyrics
            }
          });
        }
      })
      .catch(e => console.log(e.message));
  }

  render() {
    const { artist, song, lyrics } = this.state.results;
    console.log(`im running ${this.state.results.artist}`);
    if (this.state.results.lyrics.length > 0) {
      return (
        <main id="results-area">
          <div className="newSearch">
            <button className="newSearchBtn" onClick={this.props.reset}>
              <Link to={"/"}>
                <div className="groupItems">
                  New Search <i className="fas fa-plus"></i>
                </div>
              </Link>
            </button>
          </div>
          <hr className="line" />
          <div id="artistData">
            <i className="fas fa-user"></i>
            {artist}
          </div>
          <div id="songData">
            <i className="fas fa-music"></i>
            {song}
          </div>
          <p id="song-lyrics">{lyrics}</p>
          <hr className="line" />
        </main>
      );
    } else if (this.state.error.length > 0) {
      return (
        <main id="results-area">
          <h5 className="noLyrics">
            Sorry I dont know the lyrics to that song.{" "}
            <button className="errorSearchBtn" onClick={this.props.reset}>
              <Link to={"/"}>Try searching another song</Link>
            </button>
          </h5>
        </main>
      );
    } else {
      return "";
    }
  }
}
