import React, { Component } from 'react';
import GithubIcon from './images/github.svg';


class SocialLinks extends Component {
    render() {
        return (
                <div className="socialLinks">
                    <a href="https://github.com/slowback1/slowQuiz"><img src={GithubIcon} alt="a"/></a>
                </div>
            )
    } 
}  

export default SocialLinks