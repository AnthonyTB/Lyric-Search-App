import React from "react";
import "./styles/App.css";
import SearchForm from "./components/searchForm";
import ReturnResults from "./components/returnResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      song: "",
      lyrics: ""
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm {...this.state} />
        </header>
        <section id="results-area">
          <ReturnResults {...this.state} />
        </section>
      </div>
    );
  }
}

export default App;
