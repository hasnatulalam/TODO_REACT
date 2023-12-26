import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [value,setValue]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(value){
            // add todo
          addTodo(value);
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
      <button type="submit" className='todo-btn'>Add Task</button>
   </form>
  )
}

export default AddTodo