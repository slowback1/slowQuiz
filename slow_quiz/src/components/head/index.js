import React, { Component } from 'react';
import QuizSetup from './quizSetup';
import HeaderNavigation from './headerNavigation';


class Header extends Component {
    render() {
        return (
                <div className="header_main">
                    <QuizSetup />
                    <div className="header_navigation">
                        <HeaderNavigation />
                    </div>
                </div>
            )
    }
}

export default Header;