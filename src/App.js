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
      favsItem: [],
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.badRequest = this.badRequest.bind(this);
    this.addToFavs = this.addToFavs.bind(this);
    this.delFromFavs = this.delFromFavs.bind(this);
  }

  componentDidMount() {
    const userFavs = JSON.parse(localStorage.getItem("userFavs"));
    this.searchRecipe("");
    if (userFavs === null) return;
    else this.setState({ favsItem: userFavs });
  }

  badRequest(bool) {
    this.setState({
      badRequest: bool,
    });
  }

  addToFavs(data) {
    const favsItem = this.state.favsItem;
    if (favsItem.find((el) => el.idMeal === data.idMeal)) return;
    else {
      this.setState(
        {
          favsItem: [...favsItem, data],
        },
        () => localStorage.setItem("userFavs", JSON.stringify([...favsItem]))
      );
    }
  }

  delFromFavs(recipeId) {
    let newArr = [...this.state.favsItem].filter(
      (id) => id.idMeal !== recipeId
    );
    this.setState(
      {
        favsItem: [...newArr],
      },
      () =>
        localStorage.setItem(
          "userFavs",
          JSON.stringify([...this.state.favsItem])
        )
    );
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
    const MyMainPage = () => (
      <MainPage data={this.state.data} addToFavs={this.addToFavs} />
    );
    const MyFavPage = () => (
      <MainPage
        data={this.state.favsItem}
        favPage={true}
        delFromFavs={this.delFromFavs}
      />
    );
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
              <Route exact path="/favorite_recipes" component={MyFavPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
