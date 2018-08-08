import React, { Component } from 'react';
import './style/output.css';
import Header from './components/head';
import Body from './components/body';
import Footer from './components/footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state {
            numQuestions: "5",
            category: "9",
            difficulty: "easy",
            answerType: "multiple",
            ready: "false",
            questions: {},
            correctQuestion: 0,
            correctAnswers: 0,
            answeredAnswers: 0,
            page: 0,
            setupShown: true
        }
        this.handleInputChange this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handlePageNavigation = this.handlePageNavigation.bind(this);
    }
    handlePageNavigation(number) {
        this.setState({page: number });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleAnswer(answer, correctAnswer) {
        if(answer === correctAnswer) {
            this.setState({correctAnswers: this.state.correctAnswer + 1});
        } this.setState({answeredAnswers: this.state.answeredAnswers + 1});
        document.getElementById(`question_${this.state.currentQuestion+1}`).setAttribute("style", "display: none");
        //eslint-disable-next-line
        var nextQuestion = document.getElementById(`question_${this.state.currentQuestion}`);
        if(nextQuestion != null || nextQuestion != undefined) {
            nextQuestion.setAttribute("style", "display: block")
        }
    }
}