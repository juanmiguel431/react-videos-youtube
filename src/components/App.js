import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {

  onSearch = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSearch={this.onSearch}/>
      </div>
    );
  }
}

export default App;
