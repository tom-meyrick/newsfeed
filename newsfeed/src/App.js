import React from "react";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <div class="container">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/news">
          <Articles />
        </Route>
        <Route
          path="/news/:id"
          render={({ match }) => <Article id={match.params.id} />}
        />
        <FourOhFour />
      </Switch>
    </Router>
  </div>
);

export default App;
