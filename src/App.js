import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import backgroundvideo from './video/backgroundvideo.mp4';
import './App.css'

class App extends Component {
   state = {
      todos:[
         {id: 1, content: 'Early morning daily prayer must be made everyday'},
         {id: 2, content: 'Plaintain, rice and stew for breakfast'}
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
    <div>
      <div className='bg-video'>
       <video className='bg-video-content' autoPlay loop muted>
         <source src={backgroundvideo} type='video/mp4' />
         <source src={backgroundvideo} type='video/ogg' />
         Your browser does not support the video tag.
        </video>
      </div>
      <h1 className='text-heading'>ADD YOUR SCHEDULE FOR THE DAY</h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <h1 className='legal-owner'>&copy;by morenikeji</h1>
      </div>
  );
 }
}

export default App;
