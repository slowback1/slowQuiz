import React, { Component } from 'react';
import './style/output.css';
import Header from './components/head';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App;