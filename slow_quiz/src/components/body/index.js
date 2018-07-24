import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.questions,
        }
    }
    render() {
   console.log(this.props.questions);
        return (
            <div>
                <p> numquestions: {this.props.numQuestions} </p>
                <p> category: {this.props.category} </p>
                <p> difficulty: {this.props.difficulty} </p>
                <p> answerType: {this.props.answerType} </p>
                <p> ready: {this.props.ready} </p>
                <p>questions: {} </p>
            </div>)
    }
}

export default Body;
