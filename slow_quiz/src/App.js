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
                questions: {},
                currentQuestion: 0,
                correctAnswers: 0,
                answeredAnswers: 0
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleAnswer = this.handleAnswer.bind(this);
        }
        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        }
            handleAnswer(answer, correctAnswer) {

        console.log(correctAnswer);
        console.log(answer);

        //eslint-disable-next-line
        if(answer === correctAnswer) {
            this.setState({correctAnswers: this.state.correctAnswers + 1});
        } this.setState({answeredAnswers: this.state.answeredAnswers + 1});
        document.getElementById(`question_${this.state.currentQuestion}`).setAttribute("style", "display: none");
        //eslint-disable-next-line
        if(document.getElementById(`question_${this.state.currentQuestion+1}`) != null || document.getElementById(`question_${this.state.currentQuestion+1}`) != undefined) {
            document.getElementById(`question_${this.state.currentQuestion+1}`).setAttribute("style", "display: block");
        }
        this.setState({currentQuestion: this.state.currentQuestion + 1})
    }
          
          
          handleSubmit(event) {
            event.preventDefault();
              if(this.state.currentQuestion > 0) {
                document.getElementById("question_0").setAttribute("style", "display: block");
              }
              fetch(`https://opentdb.com/api.php?amount=${this.state.numQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=${this.state.answerType}`).then(result=> result.json()).then(jsonedResult => jsonedResult.results).then(data => this.setState({ready: "true", currentQuestion: 0, questions: data})).then(consoleData => console.log(this.state.questions));
              
              
              
              /*.then(function(res) {
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
              });*/
        }
  render() {
    return (
      <div className="App">
        <Header handleSubmit={this.handleSubmit.bind(this)} handleInputChange={this.handleInputChange.bind(this)} numQuestions={this.state.numQuestions} category={this.state.category} difficulty={this.state.difficulty} answerType={this.state.answerType} ready={this.state.ready} questions={this.state.questions}/>
        <Body numQuestions={this.state.numQuestions} category={this.state.category} difficulty={this.state.difficulty} answerType={this.state.answerType} ready={this.state.ready} questions={this.state.questions} currentQuestion={this.state.currentQuestion} answeredAnswers={this.state.answeredAnswers} correctAnswers={this.state.correctAnswers} handleAnswer={this.handleAnswer.bind(this)} />
        <Footer />
      </div>
    )
  }
}
export default App;