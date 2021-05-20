import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Switch, Route } from 'react-router-dom'
import SearchPage from "./screens/SearchPage";
import MoviePage from "./screens/MoviesPage";


function App() {

  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/movie/:id" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
