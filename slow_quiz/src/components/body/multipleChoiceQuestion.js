import React, { Component } from 'react';

class MultipleChoiceQuestion extends Component {
    render() {
        return (
                <div className="question">
                    <div className="questionName">
                        <h2>{this.props.question.question}</h2>
                    </div>
                    <div className="answerSection">
                        <div className="answer" value={this.props.question.answer[0]} onClick={this.props.handleAnswer}><p>{this.props.question.answer[0]}</p></div>
                        <div className="answer" value={this.props.question.answer[1]} onClick={this.props.handleAnswer}><p>{this.props.question.answer[1]}</p></div>
                        <div className="answer" value={this.props.question.answer[2]} onClick={this.props.handleAnswer}><p>{this.props.question.answer[2]}</p></div>
                        <div className="answer" value={this.props.question.answer[3]} onClick={this.props.handleAnswer}><p>{this.props.question.answer[3]}</p></div>
                    </div>
                </div>
            )
    }
}
export default MultipleChoiceQuestion;