import React, { Component } from 'react';
import TriviaLogo from './images/otdbLogo.png';

class OtdbLogo extends Component {
    render() {
        return (
                <div className="otdbLogo">
                    <img src={TriviaLogo} alt="b" />
                </div>
            )
    }
}

export default OtdbLogo;