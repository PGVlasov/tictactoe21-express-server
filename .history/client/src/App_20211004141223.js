import { Component, React } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Game from "./Containers/Field/Game";
import { Header } from "./Containers/Header/Header";
import Navbar from "./Containers/Navbar/Navbar";
import About from "./Containers/Field/About";
import Players from "./Containers/Field/Player";
import Auth from "./Containers/Auth/Auth";
import Register from "./Containers/Auth/Register";
import Reset from "./Containers/Auth/Reset";
import Training from "./Containers/Training/Training";
import Logout from "./Containers/Auth/Logout";
import GameList from "./Containers/Field/GameList";
import NewPassord from "./Containers/Auth/NewPassword";
import { connect } from "react-redux";
import { autoLogin } from "./store/action/auth";

class App extends Component {
  render() {
    console.log("APP", this.props);
    if (this.props.isAuthenticated) {
      return (
        <Switch>
          <BrowserRouter>
            <Header />
            <Navbar />
            <Route path="/" exact component={About} />
            <Route path="/gameList" exact component={GameList} />
            <Route path="/game" component={Game} />
            <Route path="/training" component={Training} />
            <Route path="/player" component={Players} />
            <Route path="/auth" component={Auth} />
            <Route path="/register" component={Register} />
            <Route path="/reset" component={Reset} />
            <Route path="/newPassword/:token" component={NewPassord} />
            <Route path="/logout" component={Logout} />
            <Redirect to="/" />
          </BrowserRouter>
        </Switch>
      );
    } else {
      return (
        <Switch>
          <BrowserRouter>
            <Header />
            <Navbar />
            <Route path="/" exact component={About} />
            <Route path="/training" component={Training} />
            <Route path="/auth" component={Auth} />
            <Route path="/register" component={Register} />
            <Route path="/reset" component={Reset} />
            <Route path="/newPassword/:token" component={NewPassord} />
            <Redirect to="/" />
          </BrowserRouter>
        </Switch>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.isAuthentificated,
  };
}

export default connect(mapStateToProps)(App);
