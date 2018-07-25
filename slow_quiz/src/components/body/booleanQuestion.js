import React, { Component } from 'react';
import decodeHtml from './decoder';

function BooleanQuestions(questions) {
    
    const questionCellsTF = questions.map(question => {
        let questionStatement = decodeHtml(question.question);
        return (
                <div className="question">
                    <div className="questionTitle">{questionStatement}</div>
                    <div className="answers trueFalseAnswers">
                        <div className="answer" value="true">true</div>
                        <div className="answer" value="false">false</div>
                    </div>
                </div>
            )
    });

        return (
            <div className="questionWrapper">
                {questionCellsTF}
            </div>
            )
    }
class BooleanQuestion extends Component {
    render() {
        return (
                <div>{BooleanQuestions(this.props.questions)}</div>
            )
    }
}

export default BooleanQuestion;