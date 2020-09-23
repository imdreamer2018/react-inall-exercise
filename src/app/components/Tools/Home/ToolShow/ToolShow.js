import React, {Component} from 'react';
import calculatorImg from '../../../../../images/calculator.png'
import timerImg from '../../../../../images/timer.png'
import {Link} from "react-router-dom";
import './ToolShow.scss';

class ToolShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div id="toolShow" className="container bg-light">
          <div className="card">
            <img id="calculator" src={calculatorImg} className="card-img-top" alt="calculator"/>
            <div className="card-body">
              <h5 className="card-title">在线计算器</h5>
              <p className="card-text">这是一个在线计算器程序</p>
              <Link className="btn btn-primary" to="/calculator">点击前往</Link>
            </div>
          </div>
          <div className="card">
            <img id="timer" src={timerImg} className="card-img-top" alt="timer"/>
            <div className="card-body">
              <h5 className="card-title">倒计时器</h5>
              <p className="card-text">这是一个倒计时器程序</p>
              <Link className="btn btn-primary" to="/timer">点击前往</Link>
            </div>
          </div>
        </div>
    )
  }
}

export default ToolShow;
