import React, { Component } from 'react';
import * as Exp from './component/Expression'
import Header from './component/Header';
import Problem from './component/Problem';
import Input from './component/Input';
import Correct from './component/Correct';
import Incorrect from './component/Incorrect';
import Button from './component/Button';

import Countdown from 'react-countdown';

class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      problem: { ...this.createProblem(Exp.generator()) },
      problemSet: [],
      round: 1,
      totalScore: 0,
      inputValue: '',
      time: Date.now()
    }
  }

  createProblem = (question) => {
    return {
      question,
      response:'',
      answer: Exp.solver(question)
    }
  }

  changedHandler = (event) => {
    this.setState({
      problem: {...this.state.problem, response: parseFloat(event.target.value)},
      inputValue: event.target.value,
    })
  }

  nextHandler = () => {
    this.setState({
      problemSet: [this.state.problem].concat(this.state.problemSet),
      totalScore: this.state.problem.response === this.state.problem.answer ? this.state.totalScore+1: this.state.totalScore,
      problem: { ...this.createProblem(Exp.generator()) },
      round: this.state.round+1,
      inputValue: '',
      time: Date.now()
    })
  }

  render() {
    return (
      this.state.round<=20?
      <div>
        <Header/>
        <Problem {...this.state.problem} score={this.state.totalScore} round={this.state.round}/>
        <Input changed={(event)=>this.changedHandler(event)} value={this.state.inputValue}/>
        <Button clicked={this.nextHandler}/>
        <Countdown date={this.state.time + 20000} onComplete={this.nextHandler} key={this.state.round}>
        </Countdown>
      </div>
      :
      <div>
        <h2>Total Score: {this.state.totalScore}</h2>
        <Correct response={this.state.problemSet}/>
        <Incorrect response={this.state.problemSet}/>
      </div>
    )
  }
}

export default Quiz;
