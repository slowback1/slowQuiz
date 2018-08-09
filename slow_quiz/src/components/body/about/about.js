import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="aboutPage">
                <h1> SlowQuiz </h1>
                
                <h2> What it is </h2>
                
                <p> SlowQuiz is a simple quiz app build withReact using the OpenTDB API found at <a href="https://opentdb.com/"> https://opentdb.com </a> </p>
                
                <h2> To-Do </h2>
                    <ul>
                        <li>Create functionality for sessions so that quiz stats are saved on page reload, and to help remove repeat questions </li>
                        <li> Using D3, create an updating Pie Chart to show yoru correct and incorrect answers, maybe split them into categories </li>
                        <li> Possibly more </li>
                    </ul>
            </div>
        )
    }
}

export default About;