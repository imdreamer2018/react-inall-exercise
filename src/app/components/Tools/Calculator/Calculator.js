import React, {Component} from 'react';
import './Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: 0,
      curr: 0,
      calculatingSymbol: '',
      result: 0,
    };
  }

  handleInputNumber = (event) => {
    console.log(typeof event.target.value);
    if (this.state.calculatingSymbol.length > 0) {
      this.setState({
        curr: this.state.curr * 10 + Number(event.target.value),
      })
    }else {
      this.setState({
        prev: this.state.prev * 10 + Number(event.target.value),
      })
    }
  };

  handleInputCalculating = (event) => {
    if (this.state.calculatingSymbol.length > 0) {
      alert("do not input repeat input operation symbol!")
    }else {
      this.setState({
        calculatingSymbol: event.target.value,
      })
    }
  };

  handleResetInput = () => {
    this.setState({
      prev: 0,
      curr: 0,
      calculatingSymbol: '',
      result: 0,
    })
  };

  handleCalculatingResult = () => {
    //need to refactor
    if (this.state.calculatingSymbol === '+') {
      this.setState({
        result: this.state.prev + this.state.curr,
      })
    }else if (this.state.calculatingSymbol === '-') {
      this.setState({
        result: this.state.prev - this.state.curr,
      })
    }else if (this.state.calculatingSymbol === '*') {
      this.setState({
        result: this.state.prev * this.state.curr,
      })
    }
    //prev: this.state.result
    this.setState({
      prev: 0,
      curr: 0,
      calculatingSymbol: '',
    })
  };


  render() {
    return (
      <div className="container">
        <div className="screen">
            <div className="input-group mb-3">
                <span className="input-group-text bg-light" id="inputScreen">Input  Screen</span>
                <input type="text"
                       aria-describedby="inputScreen"
                       className="form-control"
                       disabled
                       value={
                          this.state.prev + " " +
                          this.state.calculatingSymbol + " "+
                          this.state.curr}
                />
                </div>
            <div className="input-group mb-3 ">
                <span className="input-group-text bg-light" id="result">Result Screen</span>
                <input type="text"
                       aria-describedby="result"
                       className="form-control"
                       disabled
                       value={this.state.result} />

            </div>
        </div>
            <br/>
            <div className="row">
              <div className="col">
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={7}
                        onClick={this.handleInputNumber}
                >7
                </button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={8}
                        onClick={this.handleInputNumber}
                >8
                </button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={9}
                        onClick={this.handleInputNumber}
                >9
                </button>
                <button type="button"
                        className="btn btn-warning btn-lg m-3"
                        value="*"
                        onClick={this.handleInputCalculating}
                >*
                </button>
                <br/>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={4}
                        onClick={this.handleInputNumber}
                >4
                </button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={5}
                        onClick={this.handleInputNumber}
                >5
                </button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={6}
                        onClick={this.handleInputNumber}
                >6
                </button>
                <button type="button"
                        className="btn btn-warning btn-lg m-3"
                        value="-"
                        onClick={this.handleInputCalculating}
                >-
                </button>
                <br/>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={1}
                        onClick={this.handleInputNumber}
                >1
                </button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={2}
                        onClick={this.handleInputNumber}
                >2</button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={3}
                        onClick={this.handleInputNumber}
                >3
                </button>
                <button type="button"
                        className="btn btn-warning btn-lg m-3"
                        value="+"
                        onClick={this.handleInputCalculating}
                >+
                </button>
                <br/>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        value={0}
                        onClick={this.handleInputNumber}
                >0</button>
                <button type="button"
                        className="btn btn-light btn-lg m-3"
                        disabled
                >.</button>
                <button type="button"
                        className="btn btn-primary btn-lg m-3"
                        onClick={this.handleResetInput}
                >reset
                </button>
                <button type="button"
                        className="btn btn-danger
                        btn-lg m-3"
                        disabled={!(this.state.calculatingSymbol.length > 0)}
                        onClick={this.handleCalculatingResult}
                >=
                </button>
              </div>
            </div>
        </div>
    )
  }
}

export default Calculator;
