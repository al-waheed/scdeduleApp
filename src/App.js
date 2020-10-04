import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
   state = {
      todos:[
         {id: 1, content: 'Early morning daily prayer daily'},
      ]
   }

   deleteTodo= (id) => {
     const removedTodo = this.state.todos.filter( todo => {
        return todo.id !== id
     })
     this.setState({
       todos:removedTodo
     })
   }

   addTodo = (newTodo) => {
     newTodo.id = this.state.todos.length +1
     let addedTodo = [...this.state.todos, newTodo];
       this.setState({
       todos: addedTodo
     })
   }

  render(){
  return (
    <div className='container'>
        <div className="todo-box">
          <h1 className='heading'>ADD YOUR SCHEDULE FOR THE DAY</h1>
            <AddTodo addTodo={this.addTodo}/>
            <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
         </div>
         <div className='copywrite'>
         <p className='legal'>&copy;by morenikeji</p>
        </div>
    </div>
  );
 }
}

export default App;
