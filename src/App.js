import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoData from './Components/todoData'
import TodoItem from './Components/Todoitem'


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
  render() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
