import './App.css';
import Pomodoro from './Pomodoro';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      breakCount : 3,
      sessionCount : 15,
    }
    this.increaseBreakLength = this.increaseBreakLength.bind(this);
    this.decreaseBreakLength = this.decreaseBreakLength.bind(this);
    this.increaseSessionLength = this.increaseSessionLength.bind(this);
    this.decreaseSessionLength = this.decreaseSessionLength.bind(this);
  }

  increaseBreakLength(){
    this.setState((prev) => {
      return {
        breakCount : (prev.breakCount < 60 ) ? prev.breakCount + 1 : prev.breakCount
      }
    })
  }

  decreaseBreakLength(){
    this.setState((prev) => {
      return {
        breakCount : (prev.breakCount > 0) ? prev.breakCount -1 : prev.breakCount
      }
    })
  }

  increaseSessionLength(){
    this.setState((prev) => {
      return {
        sessionCount : (prev.sessionCount < 60 ) ? prev.sessionCount + 1 : prev.sessionCount
      }
    })
  }

  decreaseSessionLength(){
    this.setState((prev) => {
      return {
        sessionCount : (prev.sessionCount > 0) ? prev.sessionCount -1 : prev.sessionCount
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Mess personal timer</h1>
        <div className='breakSetter'>
          <BreakInterval breakInterval={this.state.breakCount} increaseBreakLength={this.increaseBreakLength} decreaseBreakLength={this.decreaseBreakLength}/>
        </div>
        <div className='sessionSetter'>
          <SessionInterval sessionInterval={this.state.sessionCount} increaseSessionLength={this.increaseSessionLength} decreaseSessionLength={this.decreaseSessionLength}/>
        </div>
        <div className='pomodoro'>
          <Pomodoro sessionInterval={this.state.sessionCount} breakInterval={this.state.breakCount}/>
        </div>  
      </div>
    );
  } 
}

export default App;
