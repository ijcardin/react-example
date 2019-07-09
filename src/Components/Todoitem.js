import React from 'react'

function TodoItem(props) {
    return (
    <div className="todo-item">
        <input id='checkboxItem' type="checkbox" checked={props.item.completed} />
        <label for='checkboxItem'>{props.item.text}</label>
    </div>
    )
}

export default TodoItem