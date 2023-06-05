 
// export default App;
import React, { Component } from "react";
import MoviesHeader from "./component/movieHeader";
import Cards from "./component/code";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      loader: true
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ apiData: json, loader: false });
      });
  }

  render() {
    // let {loader, apiData} = this.state
    let { apiData } = this.state;
    let { loader } = this.state;
    if (!loader) {
      console.log(apiData.Search);
    }
    return (
      <div className="wrapper">
        <MoviesHeader />
        <div className="cards-wrapper">
          {loader ? (
            <h2 style={{ color: "white" }}>Loading...</h2>
          ) : (
            apiData.Search?.map((item) => (
              <Cards Poster={item.Poster} Title={item.Title} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;