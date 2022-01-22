import React, { Component } from 'react';
import "./index.css";


export default class Item extends Component {

  // mouse status
  state = {mouse: false};
  // mouse move in move out
  handleMouse = (flag) => {
    return ()=>{
      // console.log(flag);
      this.setState({mouse:flag});
    }
  }
  // checkbox handler
  handleComplete = (id) => {
    // console.log(id);
    return  (e) => {
        this.props.updateTodo(id, e.target.checked);
      }
    
  }
  handleDelete = (id) => {
    console.log(id);
    if(window.confirm('Do you want to delete this task?')) {
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id, title, isComplete} = this.props;
    const {mouse} = this.state;
    return (
      <div>
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
      <label>
      <input type="checkbox" checked={isComplete} onChange={this.handleComplete(id)}/>
      <span>{title}</span>
      </label>
      <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block' : 'none'}}>Delete</button>
      </li>
      </div>);
  }
}
