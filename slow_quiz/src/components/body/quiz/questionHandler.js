import React, { Component } from 'react';
import BooleanQuestion from './booleanQuestion';
import MultipleChoiceQuestion from './multipleChoiceQuestion';


function QuestionHandle(answerType, questions, handleAnswer) {
        //eslint-disable-next-line
        if(answerType == "boolean") {
            return(<BooleanQuestion questions={questions} handleAnswer={handleAnswer}/>);
        }
        else {
            return(<MultipleChoiceQuestion questions={questions} handleAnswer={handleAnswer}/>);
        }
    
}

class QuestionHandler extends Component {
    render() {
        
        return(
            <div>
        {QuestionHandle(this.props.answerType, this.props.questions, this.props.handleAnswer)}
        </div>
        )
    }
}
export default QuestionHandler;