import React, { Component } from 'react';
import BooleanQuestion from './booleanQuestion';
import MultipleChoiceQuestion from './multipleChoiceQuestion';


const QuestionHandler = () => {
    

        const questionCellsMC = this.props.questions.map(question) => {
        let questionStatement = question.question;
        let randomSeed = Math.floor(Math.random() * 3);
        let answers = [];
        let incorrectAnswerCount = 0;
        for ( var i = 0; i < 4; i++) {
            if(i == randomSeed) {
                answers.push(question.correct_answer);
            } else {
                answers.push(question.incorrectAnswers[incorrectAnswerCount]);
                incorrectAnswerCount += 1;
            }
        }
        const answersMC = answers.map(answer) => {
            return (
                    <div className="answer" value={answer}>
                        {answer}
                    </div>
                )
        }
        return (
                <div className="question">
                    <div className="questionTitle">{questionStatement}</div>
                    <div className="answers multipleChoiceAnswers">
                        {answersMC}
                    </div>
                </div>
            )
    }
    const questionCellsTF = this.props.questions.map(question) => {
        let questionStatement = question.question;
        return (
                <div className="question">
                    <div className="questionTitle">{questionStatement}</div>
                    <div className="answers trueFalseAnswers">
                        <div className="answer" value="true">true</div>
                        <div className="answer" value="false">false</div>
                    </div>
                </div>
            )
    }
        if(this.props.answerType == "boolean") {
            return (
                    <div className="questions">
                        {questionCellsTF}
                    </div>
                )
        } else {
            <div className="questions">
                {questionCellsMC}
            </div>
        }
    
}
export default QuestionHandler;