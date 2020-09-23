import React, {Component} from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{this.props.time} Seconds</h1>
        </div>
      </div>
    )
  }
}

export default Screen;
