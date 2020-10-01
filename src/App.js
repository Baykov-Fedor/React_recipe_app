import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/header.component";
import MainPage from "./pages/main-page/main-page.component";

import "./App.css";

const SEARCHAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      badRequest: false,
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.badRequest = this.badRequest.bind(this);
  }

  componentDidMount() {
    this.getRandomMeal();
    this.badRequest(false);
  }

  badRequest(bool) {
    this.setState({
      badRequest: bool,
    });
  }

  async getRandomMeal() {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    ).then((res) => res.json());
    const randomMeal = resp.meals;
    console.log(randomMeal);
    this.setState({
      data: randomMeal,
    });
  }

  async searchRecipe(text) {
    let resp = await fetch(SEARCHAPI + text).then((res) => res.json());
    let recipeData = resp.meals;
    console.log(recipeData);
    if (recipeData === null) {
      this.badRequest(true);
      return;
    }
    this.setState({
      data: recipeData,
      badRequest: false,
    });
  }

  async getRecipe(text) {}

  render() {
    const MyMainPage = () => <MainPage data={this.state.data} />;
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header search={this.searchRecipe} badRequest={this.badRequest} />
            {this.state.badRequest ? (
              <div className="alert alert-danger" role="alert">
                No results were found for your request.
              </div>
            ) : (
              ""
            )}
            <Switch>
              <Route exact path="/" component={MyMainPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
