import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1});
  }

  decrement() {
    this.setState({ count: Math.max(0, this.state.count - 1)});
  }

  reset() {
    this.setState({ count: 0});
  }

  render() {
    return (
      <div className="App">
        <Todo
          origin={ this.state.count }
          add={ this.increment }
          subtract={ this.decrement }
          reset={ this.reset } />
      </div>
    );
  }
}

export default App;
