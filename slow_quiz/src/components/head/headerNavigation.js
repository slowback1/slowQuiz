import React, { Component } from 'react';


function HeaderNav(handlePageNavigation) {
    return (
                        <div className="headerNav">
                <ul>
                    <li value={0} className="navUnit" onClick={() => handlePageNavigation(0)}>Quiz</li>
                    <li className="seperator"> | </li>
                    <li value={1}  className="navUnit" onClick={() => handlePageNavigation(1)}>About</li>
                </ul>
            </div>
        );
}


class HeaderNavigation extends Component {
    render() {
        return(
        <div className="headerNavigation">
            {HeaderNav(this.props.handlePageNavigation)}
            <div className="headerInfo">
                <h1> SlowQuiz </h1>
                <h3> A quiz webapp made in React, using the Open Trivia DB API </h3>
            </div>
            
        </div>
        
        )
    }
}

export default HeaderNavigation;