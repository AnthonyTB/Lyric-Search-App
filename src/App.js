import React from "react";
import "./styles/App.css";
import SearchForm from "./components/searchForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
