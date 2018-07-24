import React, { Component } from 'react';
//import QuestionHandler from './questionHandler'


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if(this.props.ready === "true") {
        return (
            <div>
                <p>quiz would have started...IF IT WORKED!</p>
            </div>)
        }
         
        
            return (
         <div>
                <p>quiz hasn't started yet!</p>
            </div>
        )
    }

}

export default Body;
