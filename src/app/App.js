import React, {Component} from 'react';
import './app.less';
import {BrowserRouter} from "react-router-dom";
import Tools from "./components/Tools/Tools";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Tools/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
