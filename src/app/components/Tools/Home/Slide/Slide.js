import React, {Component} from 'react';
import slide from '../../../../../images/hero-image.png'
import './Slide.scss';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="homeSlide" className="container">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide} className="d-block w-100" alt="12312312" />
              <div className="carousel-caption d-none d-md-block">
                <h2>在线实时工具</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slide;
