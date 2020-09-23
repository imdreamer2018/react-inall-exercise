import React, {Component} from 'react';
import Screen from "./Screen/Screen";
import './Timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      on: false,
    }
  }

  handleFiledChange = (field, event) => {
    this.setState({
      [field]: Number(event.target.value),
    });
  };


  handleTiming = () => {
    // 清除可能存在的定时器
    clearInterval(this.timer);
    // 创建（重新赋值）定时器
    this.timer = setInterval(()=>{
      // 当前时间回显-1
      this.setState({
        time:this.state.time-1
      },()=>{
        // 判断修改后时间是否小于1达到最小时间
        if(this.state.time <= 0){
          // 清除定时器
          clearInterval(this.timer)
          // 结束定时器循环
          return
        }
        // 循环自调用
        this.handleTiming()
      })
    },1000)
  };


  handleClickTimer = () => {
    if (!this.state.on) {
      this.handleTiming()
    } else {
      clearInterval(this.timer)
    }
    this.setState({
      on: !this.state.on,
    })
  };

  handleResetTime = ()=> {
    this.setState({
      time: 0,
    });
  };

  render() {
    return (
      <div className="timer">
      <div id="timerContainer" className="container mt-5">
        <h1>在线倒计时器</h1>
        <form className="mt-5">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">设置时间</span>
            </div>
            <input type="text"
                   className="form-control"
                   aria-label="Amount (to the nearest dollar)"
                   value={this.state.time}
                   onChange={(e) => {this.handleFiledChange("time", e)}}
            />
            <div className="input-group-prepend">
              <span className="input-group-text">秒</span>
            </div>
          </div>
          <input
            id="profileSubmit"
            type="button"
            className="btn btn-warning mt-5 mb-5"
            value="reset"
            onClick={this.handleResetTime}
            disabled={!this.state.time}
          />
          <input
            id="profileSubmit"
            type="button"
            className={this.state.on ? "btn btn-danger mt-5 ml-3 mb-5" : "btn btn-primary mt-5 ml-3 mb-5"}
            value={this.state.on? "stop" : "start"}
            onClick={this.handleClickTimer}
            disabled={!this.state.time}
          />
        </form>
      </div>
        <Screen time={this.state.time}/>
      </div>
    );
  }
}

export default Timer;
