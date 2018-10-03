import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>{ this.props.origin }</h1>
        <button onClick={ this.props.add }>Add</button>
        <button onClick={ this.props.subtract }>Subtract</button>
        <button onClick={ this.props.reset }>Reset</button>
      </div>

    );
  }
}

export default Todo;
