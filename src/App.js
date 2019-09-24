import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      picture: ""
    };
  }

  getQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}
export default App;

