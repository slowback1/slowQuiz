import React, { Component } from 'react';
// eslint-disable-next-line
import quizGet from '../../quizfetcher';

class QuizSetup extends Component {


        render(){
            if(this.props.page === 0) {
        return (
                <form>
                <label > # Questions:
                    <select name="numQuestions" value={this.props.numQuestions} onChange={this.props.handleInputChange}>
                        <option value="5"> 5 </option>
                        <option value="10"> 10 </option>
                        <option value="15"> 15 </option>
                        <option value="20"> 20 </option>
                    </select>
                    </label>
                    <label>Category:
                        <select name="category" value={this.props.category} onChange={this.props.handleInputChange}>
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
                        <select name="difficulty" value={this.props.difficulty} onChange={this.props.handleInputChange}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </label>
                    <label> Answer Type:
                        <select name="answerType" value={this.props.answerType} onChange={this.props.handleInputChange}>
                            <option value="multiple">multiple choice</option>
                            <option value="boolean">true or false </option>
                        </select>
                    </label>
                    <button type="submit" onClick={this.props.handleSubmit}> Start Quiz! </button>
                </form>
            )} else {
                return (
                        <div>
                        </div>
                    )
            }
    }}

export default QuizSetup;