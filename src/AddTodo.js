import React, { Component } from 'react'
import './AddTodo.css'

class AddTodo extends Component{
    state={
       content: null
    }

    handleSubmit= (e) =>{
     e.preventDefault();
     this.props.addTodo(this.state);
     e.target.reset()
    }

    handleChange = (e) =>{
        this.setState({
         [e.target.id] : e.target.value
        })
    }


    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                  <div className='input-box'>
                  <input type='text' id='content' className='input' required placeholder='ADD YOUR SCHEDULE' onChange={this.handleChange}/>
                  <button className='input-btn'>AddSchedule</button>
                  </div>
              </form>
            </div>
        )
    }
}

export default AddTodo;