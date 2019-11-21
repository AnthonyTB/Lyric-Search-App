import React from "react";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import ReturnResults from "./components/ReturnResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.artistInput = this.artistInput.bind(this);
    this.songInput = this.songInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.apiHandler = this.apiHandler.bind(this);
    this.state = {
      artist: "",
      song: "",
      lyrics: "",
      results: {}
    };
  }

  apiHandler(artist, song) {
    const BASE_URL = "https://api.lyrics.ovh/v1";
    fetch(`${BASE_URL}/${artist}/${song}`)
      .then(res => res.json())
      .then(resJson =>
        this.setState(prevState => ({
          results: {
            lyrics: resJson.lyrics,
            song,
            artist: "hi"
          }
        }))
      )
      .then(console.log(this.state))
      .catch(e => console.log(e.message));
  }

  artistInput(newVal) {
    this.setState({ artist: newVal });
  }
  songInput(newVal) {
    this.setState({ song: newVal });
  }

  onSubmit(e) {
    e.preventDefault();
    this.apiHandler(this.state.artist, this.state.song);
    this.artistInput.value = "";
    this.songInput.value = "";
  }

  render() {
    let renderResults =
      this.state.lyrics.length !== 0 ? (
        <ReturnResults state={this.state} />
      ) : (
        ""
      );
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm
            store={this.state}
            onSubmit={this.onSubmit}
            songInput={this.songInput}
            artistInput={this.artistInput}
          />
        </header>
        {renderResults}
      </div>
    );
  }
}

export default App;
