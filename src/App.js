import React, { Component } from "react";
import Movies from "./Module/movies";
import NavBar from "./Module/common/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./Module/customers";
import Rentals from "./Module/rentals";
import NotFound from "./notfound";
import MovieForm from "./Module/movieForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" render={props => <Movies {...props} />} />
            <Route
              path="/customers"
              render={props => <Customers {...props} />}
            />
            <Route path="/rentals" render={props => <Rentals {...props} />} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
