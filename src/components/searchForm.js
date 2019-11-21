import React from "react";
import "../styles/form.css";

export default class searchForm extends React.Component {
  render() {
    return (
      <section className="form">
        <form id="js-form">
          <input
            type="text"
            id="artist-input"
            placeholder="Artist Name"
            onChange={e => this.props.artistInput(e.target.value)}
          />
          <input
            type="text"
            id="song-input"
            placeholder="Song Name"
            onChange={e => this.props.songInput(e.target.value)}
          />
          <button type="submit" id="submitBtn" onClick={this.props.onSubmit}>
            search
          </button>
        </form>
      </section>
    );
  }
}
