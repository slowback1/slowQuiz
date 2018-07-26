import React, { Component } from 'react';
import decodeHtml from './decoder';

function MultipleChoiceQuestions(questions, handleAnswer) {

    const questionCellsMC = questions.map((question, key) => {
        let questionStatement = decodeHtml(question.question);
        let randomSeed = Math.floor(Math.random() * 3);
        let answers = [];
        let incorrectAnswerCount = 0;
        for (var i = 0; i < 4; i++) {
            //eslint-disable-next-line
            if(i == randomSeed) {
                answers.push(question.correct_answer);
            } else {
                answers.push(question.incorrect_answers[incorrectAnswerCount]);
                incorrectAnswerCount += 1;
            }
        }
        const answersMC = answers.map(answer => {
            let decodedAnswer = decodeHtml(answer);
            let correctAnswer = decodeHtml(question.correct_answer)
            return (
                    <div className="answer" value={decodedAnswer} ca={correctAnswer} onClick={() => handleAnswer(decodedAnswer, correctAnswer)}>
                        {decodedAnswer}
                    </div>
                )
        });
        return (
                            <div className="question" id={`question_${key}`}>
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
                    <div>{MultipleChoiceQuestions(this.props.questions, this.props.handleAnswer)}</div>
                )
        }
    }

export default MultipleChoiceQuestion;