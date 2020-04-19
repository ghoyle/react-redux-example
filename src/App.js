import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import './App.scss';
import Dashboard from "./pages/dashboard/Dashboard";
import configureStore from "./app/store";
import {City} from "./features/city/City";
import {PageNotFound} from "./pages/pageNotFound/PageNotFound";
import SiteHeader from './components/siteHeader/SiteHeader'

class App extends Component{
  render(){
    const store = configureStore()
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <SiteHeader/>
            <main className="App-body">
              <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/city/:name">
                  <City/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
              </Switch>
            </main>
          </div>
      </Router>
    </Provider>
  );}
}

export default App;
