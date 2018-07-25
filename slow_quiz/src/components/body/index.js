import React, { Component } from 'react';
import QuestionHandler from './questionHandler'


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if(this.props.ready === "true") {
        return (
            <div>
                <QuestionHandler questions={this.props.questions} answerType={this.props.answerType} />
            </div>)
        }
         
        
            return (
         <div>
                <p>quiz hasn't started yet!</p>
            </div>
        )
    }

}

export default Body;
