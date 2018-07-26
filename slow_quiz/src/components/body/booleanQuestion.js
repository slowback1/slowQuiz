import React, { Component } from 'react';
import decodeHtml from './decoder';

function BooleanQuestions(questions, handleAnswer) {
    
    const questionCellsTF = questions.map((question, key) => {
        let questionStatement = decodeHtml(question.question);
        let correctAnswer = decodeHtml(question.correct_answer);
        return (
                <div className="question" id={`question_${key}`}>
                    <div className="questionTitle">{questionStatement}</div>
                    <div className="answers trueFalseAnswers">
                        <div className="answer" value="true" ca={correctAnswer} onClick={() => handleAnswer("True", correctAnswer)}>true</div>
                        <div className="answer" value="false" ca={correctAnswer} onClick={() => handleAnswer("False", correctAnswer)}>false</div>
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
                <div>{BooleanQuestions(this.props.questions, this.props.handleAnswer)}</div>
            )
    }
}

export default BooleanQuestion;