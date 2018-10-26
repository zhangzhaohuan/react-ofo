import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './App.scss';
import asyncComponent from 'common/asyncComponent';
import ScrollTop from 'common/ScrollTop';
//按需加载
const Index = asyncComponent(() => import('./component/home'))
const News = asyncComponent(() => import('./component/news'))
const About = asyncComponent(() => import('./component/abouts'))
const Cooperation = asyncComponent(() => import('./component/cooperation'))

class App extends Component {
  constructor() {
    super();
    this.state = {
      isHome: true,
      scrollTop: true
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollTop>
            <Switch>
              <Route path="/news" component={News} />
              <Route path="/abouts" component={About} />
              <Route path="/cooperation" component={Cooperation} />
              <Route path="/" component={Index} />
            </Switch>
          </ScrollTop>
        </Router>
        <footer style={{ height: '1000px' }}>
          <img src={require('assets/feed_title_round_1.svg')} alt="" />
          <p style={{ fontSize: '19px' }}>最后事件</p>
        </footer>
      </div>
    );
  }
}

export default App;
