import React, { Component } from 'react';
import QuestionHandler from './quiz/questionHandler'
import About from './about/about';
import Chart from './chart/chart';

class Body extends Component {
    render() {
            
        if(this.props.page === 0) {
            //eslint-disable-next-line
            if(this.props.ready === "true") {
            return (
                <div>
                    <p>You've correctly answered {this.props.correctAnswers} out of {this.props.answeredAnswers} so far.</p>
                    <QuestionHandler questions={this.props.questions} answerType={this.props.answerType} handleAnswer={this.props.handleAnswer}/>
                </div>)
            }
             
            
                return (
             <div>
                    <p>quiz hasn't started yet!</p>
                </div>
            )
    } else {
        return (
                <About />
            )
    }
        
    }


    
}

export default Body;
