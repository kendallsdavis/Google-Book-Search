import React from "react";
import Books from "./pages/books";
import Saved from "./pages/savedBooks";
import Nav from './components/nav/nav';
import Title from './components/header/header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Title/>
          <Switch>
            <Route exact path="/" component={Books}></Route>
            <Route exact path="/books" component={Books}></Route>
            <Route exact path="/saved" component={Saved}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;