import React, { Component } from 'react';
import QuizSetup from './quizSetup';
import HeaderNavigation from './headerNavigation';


class Header extends Component {
    render() {
        return (
                <div className="header_main">
                    <QuizSetup handleSubmit={this.props.handleSubmit} handleInputChange={this.props.handleInputChange} numQuestions={this.props.numQuestions} category={this.props.category} difficulty={this.props.difficulty} answerType={this.props.answerType} ready={this.props.ready} questions={this.props.questions} />
                    <div className="header_navigation">
                        <HeaderNavigation />
                    </div>
                </div>
            )
    }
}

export default Header;