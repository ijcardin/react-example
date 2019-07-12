import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoData from './Components/todoData'
import TodoItem from './Components/Todoitem'
import { tsConstructorType } from '@babel/types';


// function App() {
//   const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} />)
//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   );
// }

class App extends React.Component {
  // you can add your own method here and then call it inside render
  constructor() {
    super() // This line is always needed if you have a constructor
    this.state = {
      todos: todoData
    } // state will always be an object
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedState = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedState
      }
    })  
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
      handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       loggedIn: true
//     }

//   }

//   handleClick() {
//    this.state.loggedIn ? this.setState({loggedIn : false}) : this.setState({loggedIn : true})
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.loggedIn ? "Logged in!" : "Logged out!"}</h1>
//         <button onClick={this.handleClick}>{this.state.loggedIn ? "log out" : "log in"}</button>
//       </div>
//     )
//   }
// }

export default App;
