import React from "react";
import Search from "./pages/search";
import Saved from "./pages/savedBooks";
import Nav from './components/nav/nav';
import Header from './components/header/header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Header>Google Book Search</Header>
          <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/saved" component={Saved}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;