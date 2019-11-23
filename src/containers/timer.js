import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/timer.css'

class Timer extends Component{
  constructor(props){
      super(props);
      autoBind(this);
      this.state = { 
          ref : React.createRef(),
          date : new Date(),
      }
  }
  tick() {
    this.setState(state => ({
      date : new Date()
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let date = this.state.date;

    let a = (el) => +el<9 ? '0'+el: el

    return (
      <div id='timer' ref={this.state.ref} > 
        { a(date.getHours()) +':'+ a(date.getMinutes()) + ':' + a(date.getSeconds()) +'  '+ days[date.getDay()]}<br/>
        { a(date.getUTCDate()) +':'+ a(date.getMonth()) +':'+ date.getYear()%100 }<br/>
      </div>
    );
  }
}

export default Timer