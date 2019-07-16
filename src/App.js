import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todoData from "./Components/todoData";
import TodoItem from "./Components/Todoitem";
import { tsConstructorType } from "@babel/types";

// function App() {
//   const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} />)
//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   );
// }

// class App extends React.Component {
//   // you can add your own method here and then call it inside render
//   constructor() {
//     super() // This line is always needed if you have a constructor
//     this.state = {
//       todos: todoData
//     } // state will always be an object
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedState = prevState.todos.map(todo => {
//         if(todo.id === id){
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedState
//       }
//     })
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
//       handleChange={this.handleChange} />)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     );
//   }
// }

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

// Star Wars API (using fetch)

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({loading: true})
//     fetch("https://swapi.co/api/people/2")
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         loading:false,
//         character: data
//       })
//     })
//   }

//   render() {

//     return (
//       <div>
//         {this.state.loading ? "Loading..." : this.state.character.name}
//       </div>
//     )
//   }
// }

// Forms in react example

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Everytime you have a function calling setState you MUST bind it
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked }) : this.setState({[name]: value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        {
          // Other useful form elemets:
          // <textarea /> element
          // <input type="checkbox" />
          // <input type="radio" />
          // <select> and <option> elements
        }
        <br />

        <textarea value={"some default value"} onChange={this.handleChange} />
        <br/>
        <label>
          <input
            name="isFriendly"
            type="checkbox"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly?
        </label>
        <br/>
        <label>
          <input
            name="gender"
            type="radio"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <br/>
        <label>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> female
        </label>
        <br/>

        <label>Favorite Color: </label>
        <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          
        </select>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        {this.state.gender === "" ? "" : <h2>You are a {this.state.gender}</h2>}
        <h2>Your favorite color is {this.state.favColor}</h2>

        <button>Submit</button>
      </form>
    );
  }
}

export default App;
