import React, { Component } from 'react';


const BooleanQuestion = () => {
    
    const questionCellsTF = this.props.questions.map(question => {
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
    });

        return (
            <div className="questionWrapper">
                {questionCellsTF}
            </div>
            )
    }


export default BooleanQuestion;