
import './App.css';
import React, {Component, useState} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
  //initialize state
  state = {
    todos:[
      {id: 1, title:'task1', isComplete: true}, 
      {id: 2, title:'task2', isComplete: true}, 
      {id: 3, title:'task3', isComplete: false}
    ]
  }
  //
  addTodo = (title) => {
    // get old todos
    const {todos} = this.state;
    // add new todo
    // can use uuid, need to install: yarn add uuid/ npm i uuid/ yarn add nanoid
    let id = todos.length+1;
    const newTodos = [{id:id, title:title, isComplete:false}, ...todos];
    //  update
    this.setState({todos:newTodos});
  }
  updateTodo = (id, isComplete) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, isComplete}
      else return todoObj;
    })
    this.setState({todos:newTodos});
  }
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => todoObj.id != id);
    this.setState({todos:newTodos});
  }

  checkAllTodo = (isComplete) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=> {
      return {...todoObj, isComplete:isComplete}
    })
    this.setState({todos:newTodos});
  }

  deleteCompleteTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=> !todoObj.isComplete);
    this.setState({todos:newTodos});
  }
  render() {
    const {todos} = this.state;
  
    return (
  
      <div className="App">
      <div className="todo-container">
      <div className="todo-wrap">
      <Header addTodo={this.addTodo}/>
      <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
      <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteCompleteTodo={this.deleteCompleteTodo} />
        
      
      </div>
    </div>
      </div>
    );
  }
}


