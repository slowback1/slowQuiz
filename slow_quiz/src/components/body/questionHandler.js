import React, { Component } from 'react';
import BooleanQuestion from './booleanQuestion';
import MultipleChoiceQuestion from './multipleChoiceQuestion';


const QuestionHandle = (answerType, questions) => {
        if(answerType == "boolean") {
            return(<BooleanQuestion questions={questions}/>);
        }
        else {
            return(<MultipleChoiceQuestion questions={questions}/>);
        }
    
}

class QuestionHandler extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <MultipleChoiceQuestion questions={this.props.questions}/>
        
        )
    }
}
export default QuestionHandler;