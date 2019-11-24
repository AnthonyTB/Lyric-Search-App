import React from "react";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import ReturnResults from "./components/ReturnResult";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.child = React.createRef();
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
        <Route
          path="/:artist/:song"
          render={routeProps => {
            return <ReturnResults state={this.state} {...routeProps} />;
          }}
        />
      </div>
    );
  }
}

export default App;
