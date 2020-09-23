import React, {Component} from 'react';
import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home/Home";
import Calculator from "./Calculator/Calculator";
import Timer from "./Timer/Timer";

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tools">
        <Header/>
        <Route exact path="/calculator" component={Calculator}/>
        <Route exact path="/Timer" component={Timer}/>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}

export default Tools;
