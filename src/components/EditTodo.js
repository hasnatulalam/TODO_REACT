import React, { useState } from 'react'

export const EditTodo = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task);
  const handleSubmit =(e)=>{
      e.preventDefault()
      if(value){
          // add todo
        editTodo(value,task.id);
        // clear form after submission
        console.log(setValue)
        setValue('');
      }
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
   
    <input type="text" 
     onChange={(e)=>setValue(e.target.value)}
      className="todo-input"
      value={value}
       placeholder='What is the task today?'/>
        <button type="submit" className='todo-btn'>Update Task</button>
     </form>
  )
}
