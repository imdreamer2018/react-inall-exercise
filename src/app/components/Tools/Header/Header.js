import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-link" to="/calculator">在线计算器</Link>
            <Link className="nav-link" to="/timer">在线倒计时器</Link>
        </div>
      </nav>
    )
  }
}

export default Header;
