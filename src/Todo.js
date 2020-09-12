import React from 'react' 
import './Todo.css';

const Todo = ({ todos , deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
        return(
            <div key={todo.id} className='list-item'>
                <div>{todo.content}</div>
                <button className='list-btn' onClick={() => {deleteTodo(todo.id)}}>x</button>
            </div>
        )
        })
    ):(
       <p className='text-main'>Hello user, You have no schedule left!</p> 
    )
  return(
      <div className='main-body'>
       {todoList}
      </div>
  )
}
export default Todo;