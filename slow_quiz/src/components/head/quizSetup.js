import React, { Component } from 'react';
// eslint-disable-next-line
import quizGet from '../../quizfetcher';

class QuizSetup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                numQuestions: "5",
                category: "9",
                difficulty: "easy",
                answerType: "multiple",
                ready: "false",
                questions: ""
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        }
        handleSubmit(event) {
            let fetchedQuestions = quizGet(this.state.numQuestions, this.state.category, this.state.difficulty, this.state.answerType);
            console.log("I handled a submit click!");
            this.setState({ready: "true", questions: fetchedQuestions});
        }
        render(){
        return (
                <form>
                <label > # Questions:
                    <select name="numQuestions" value={this.state.numQuestions} onChange={this.handleInputChange}>
                        <option value="5"> 5 </option>
                        <option value="10"> 10 </option>
                        <option value="15"> 15 </option>
                        <option value="20"> 20 </option>
                    </select>
                    </label>
                    <label>Category:
                        <select name="category" value={this.state.category} onChange={this.handleInputChange}>
                            <option value="9">general knowledge</option>
                            <option value="10">books</option>
                            <option value="11">film</option>
                            <option value="12">music</option>
                            <option value="13">musicals & theatres </option>
                            <option value="14">television</option>
                            <option value="15">video games</option>
                            <option value="16">board games</option>
                            <option value="17">science & nature</option>
                            <option value="18">computer science</option>
                            <option value="19">mathematics</option>
                            <option value="20">mythology</option>
                            <option value="21">sports</option>
                            <option value="22">geography</option>
                            <option value="23">history</option>
                            <option value="24">politics</option>
                            <option value="25">art</option>
                            <option value="26">celebrities</option>
                            <option value="27">animals</option>
                            <option value="28">vehicles</option>
                            <option value="29">comics</option>
                            <option value="30">gadgets</option>
                            <option value="31">japanese anime & manga</option>
                            <option value="32">cartoons & animations</option>
                        </select>
                    </label>
                    <label> Difficulty:
                        <select name="difficulty" value={this.state.difficulty} onChange={this.handleInputChange}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </label>
                    <label> Answer Type:
                        <select name="answerType" value={this.state.answerType} onChange={this.handleInputChange}>
                            <option value="multiple">multiple choice</option>
                            <option value="boolean">true or false </option>
                        </select>
                    </label>
                    <button type="submit" onClick={this.handleSubmit}> Start Quiz! </button>
                </form>
            )
    }}

export default QuizSetup;