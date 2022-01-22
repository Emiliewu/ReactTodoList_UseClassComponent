import React, { Component } from 'react';
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  }
  handleDeleteCompleteTask = () => {
    if(window.confirm('Do you want to delete all the selected tasks?')) {
      this.props.deleteCompleteTodo();
    }
  }
  render() {
    const {todos} = this.props;
    //console.log(todos);
    const countComplete = todos.reduce((pre, current)=>pre + (current.isComplete ? 1 : 0), 0 )
    const total = todos.length;
    return (
      <div>
        <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={countComplete === total && total !== 0 ? true : false}/> 
          <span> Select All</span>
        </label>
        <span>
         <span> Finished {countComplete}</span> / Total {total}
        </span>
        <button onClick={this.handleDeleteCompleteTask} className="btn btn-danger">Delete Completed Tasks</button>
        </div>
      </div>);
  }
}
