import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";


export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  //use enter key to submit
  handleKeyUp = (event) => {
    //Descructuring    
    const {keyCode, target} = event;
    // check keyCode 13 is enter
    // console.log(keyCode);
    // console.log(target.value);
    if(keyCode !== 13) return;
    if(!target.value.trim()) {
      alert('task cannot be empty');
      return;
    }
    this.props.addTodo(target.value);
    target.value = '';
    
  }
  render() {
    return (
      <div>
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please enter the task and press ENTER"/>
        </div>
      </div>
    );
  }
}
