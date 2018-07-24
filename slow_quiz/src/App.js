import React, { Component } from 'react';
import './style/output.css';
import Header from './components/head';
import Body from './components/body';
import Footer from './components/footer';
//import quizGet from './quizfetcher';

class App extends Component {
          constructor(props) {
            super(props);
            this.state = {
                numQuestions: "5",
                category: "9",
                difficulty: "easy",
                answerType: "multiple",
                ready: "false",
                questions: {}
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
            event.preventDefault();
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
            let x;
              fetch(`https://opentdb.com/api.php?amount=${this.state.numQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=${this.state.answerType}`).then(function(res) {
                 console.log('fetch done');
                  return res.json();
              }).then(function(result) {
                  console.log('results jsonified');
                  return result.results;
              }).then(function(questions) {
                  console.log(questions);
                  x = questions;
              });
              this.setState({
                ready: true,
                questions: x
              });
        }
  render() {
    return (
      <div className="App">
        <Header handleSubmit={this.handleSubmit.bind(this)} handleInputChange={this.handleInputChange.bind(this)} numQuestions={this.state.numQuestions} category={this.state.category} difficulty={this.state.difficulty} answerType={this.state.answerType} ready={this.state.ready} questions={this.state.questions}/>
        <Body numQuestions={this.state.numQuestions} category={this.state.category} difficulty={this.state.difficulty} answerType={this.state.answerType} ready={this.state.ready} questions={this.state.questions} />
        <Footer />
      </div>
    )
  }
}
export default App;