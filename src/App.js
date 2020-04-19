import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import './App.scss';
import Dashboard from "./pages/dashboard/Dashboard";
import configureStore from "./app/store";
import {City} from "./features/city/City";


class App extends Component{
  render(){
    const store = configureStore()
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <nav className="App-navigation">
                <ul>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/counter">Counter</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main className="App-body">
              <Switch>
                <Route path="/counter">
                  {/*<Counter/>*/}
                </Route>
                <Route path="/city/:name">
                  <City/>
                </Route>
                <Route path="/" component={Dashboard}/>

              </Switch>
            </main>
          </div>
      </Router>
    </Provider>
  );}
}

export default App;
