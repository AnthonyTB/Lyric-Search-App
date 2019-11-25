import React from "react";
import "./styles/App.css";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm";
import ReturnResults from "./components/ReturnResult";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      artist: "",
      song: "",
      lyrics: "",
      results: {},
      error: ""
    };
  }

  artistInput = newVal => {
    this.setState({ artist: newVal });
  };
  songInput = newVal => {
    this.setState({ song: newVal });
  };

  onSubmit(e) {
    e.preventDefault();
  }

  resetValues = e => {
    e.preventDefault();
    console.log("reseting vals");
    this.setState({
      artist: "",
      song: "",
      lyrics: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={routeProps => {
            return (
              <SearchForm
                state={this.state}
                onSubmit={this.onSubmit}
                songInput={this.songInput}
                artistInput={this.artistInput}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/:artist/:song"
          render={routeProps => {
            return (
              <ReturnResults
                state={this.state}
                reset={this.resetValues}
                {...routeProps}
              />
            );
          }}
        />
        <br />
      </div>
    );
  }
}

export default App;
