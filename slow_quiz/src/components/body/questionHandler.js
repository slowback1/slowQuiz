import React, { Component } from 'react';
import BooleanQuestion from './booleanQuestion';
import MultipleChoiceQuestion from './multipleChoiceQuestion';


function QuestionHandle(answerType, questions) {
        if(answerType == "boolean") {
            return(<BooleanQuestion questions={questions}/>);
        }
        else {
            return(<MultipleChoiceQuestion questions={questions}/>);
        }
    
}

class QuestionHandler extends Component {
    render() {
        
        return(
            <div>
        {QuestionHandle(this.props.answerType, this.props.questions)}
        </div>
        )
    }
}
export default QuestionHandler;