import React, { Component } from 'react';


class BooleanQuestion extends Component {
    
    render() {
        return (
            <div className="question">
                <div className="questionName">
                    <h2>{this.props.question.question}</h2>
                </div>
                <div className="answerSection">
                    <div className="answer" value="true" onClick={this.props.handleAnswer}><p>True</p></div>
                    <div className="answer" value="false" onClick={this.props.handleAnswer}><p>False</p></div>
                </div>
            </div>
            )
    }
}

export default BooleanQuestion;