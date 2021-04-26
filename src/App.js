import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Login from "./componets/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
