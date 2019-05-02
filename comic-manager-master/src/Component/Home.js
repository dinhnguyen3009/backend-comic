import React, { Component } from 'react'
import Manager from './Manager'
import Login from './Login'
import ComicEdit from './ComicEdit'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
function PrivateRoute({ component: Component,data:isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={isAuthenticated:false}
    this.onLogin = this.onLogin.bind(this)
  }
  onLogin(){
    this.setState({isAuthenticated:true})
  }
  render() {
    return (
      <Router>
      {/* <Route exact path='/' component={isAuthenticatedLogin}/> */}
      <Route exact path='/' render={(props) => (
      <Login {...props} onLogin={this.onLogin}/>
      )}/>
      <PrivateRoute exact path='/manager' component={Manager} data={this.state.isAuthenticated}  />
      <PrivateRoute path="/manager/:idcomic" component={ComicEdit} data={this.state.isAuthenticated} />;
    </Router>
    )
  }
}
