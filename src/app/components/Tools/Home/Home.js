import React, {Component} from 'react';
import Slide from "./Slide/Slide";
import ToolShow from "./ToolShow/ToolShow";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
         <Slide/>
         <ToolShow/>
      </div>
    )
  }
}

export default Home;
