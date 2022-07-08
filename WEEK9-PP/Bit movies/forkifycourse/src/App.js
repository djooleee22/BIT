import React from "react";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
  state = {
    onHomePage: true,
    data: [],
    show: 0,
    query: "",
  };

  fetchData() {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((dataRes) => {
        this.setState({
          data: dataRes
            .sort((a, b) => b.rating.average - a.rating.average)
            .filter((el, i) => i < 50),
        });
      });
  }

  search(query) {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((dataRes) => {
        this.setState({
          data: dataRes,
          onHomePage: true,
        });
      });
  }

  changeState(el) {
    this.setState({
      onHomePage: false,
      show: el,
    });
  }

  goToHome() {
    this.setState({
      onHomePage: true,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  defaultButton(q) {
    if (q !== "") {
      this.setState({
        query: q,
      });
    }
  }

  render() {
    return (
      <>
        <Header
          defaultF={this.defaultButton.bind(this)}
          searchF={this.search.bind(this)}
        />
        {this.state.onHomePage ? (
          <HomePage
            myFunc={this.changeState.bind(this)}
            movies={this.state.data}
          />
        ) : (
          <SinglePage myFunc={this.goToHome.bind(this)} movies={this.state} />
        )}
        {this.state.query && this.state.onHomePage && (
          <button
            onClick={() => {
              this.fetchData();
              this.setState({ query: "" });
            }}
            className="default-btn"
          >
            Back To Default
          </button>
        )}
        <Footer />
      </>
    );
  }
}

export default App;
