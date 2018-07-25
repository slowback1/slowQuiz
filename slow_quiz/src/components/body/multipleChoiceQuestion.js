import React, { Component } from 'react';
import decodeHtml from './decoder';

function MultipleChoiceQuestions(questions) {

    const questionCellsMC = questions.map(question => {
        let questionStatement = decodeHtml(question.question);
        console.log(question);
        let randomSeed = Math.floor(Math.random() * 3);
        let answers = [];
        let incorrectAnswerCount = 0;
        for (var i = 0; i < 4; i++) {
            if(i == randomSeed) {
                answers.push(question.correct_answer);
            } else {
                answers.push(question.incorrect_answers[incorrectAnswerCount]);
                incorrectAnswerCount += 1;
            }
        }
        const answersMC = answers.map(answer => {
            let decodedAnswer = decodeHtml(answer);
            return (
                    <div className="answer" value={decodedAnswer}>
                        {decodedAnswer}
                    </div>
                )
        });
        return (
                            <div className="question">
                    <div className="questionTitle">{questionStatement}</div>
                    <div className="answers multipleChoiceAnswers">
                        {answersMC}
                    </div>
                </div>
            )
    });

        return (
                <div className="questionWrapper">
                    {questionCellsMC}
                </div>
            )
    }
    class MultipleChoiceQuestion extends Component {
        render() {
            return(
                    <div>{MultipleChoiceQuestions(this.props.questions)}</div>
                )
        }
    }

export default MultipleChoiceQuestion;