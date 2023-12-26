import React, { useState } from 'react'
 import { v4 as uuidv4 } from "uuid";
import AddTodo from './AddTodo';
import { EditTodo } from './EditTodo';
import Todo from './Todo';

const TodoWrapper = () => {
    const [todos,setTodos]=useState([])

    const addTodo =(todo)=>{
        setTodos([...todos,{id:uuidv4(),task:todo, completed:false, isEditing:false}])
    }

    const editTodo =(id)=>{
        setTodos(todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
    }

    const toggleComplete=(id)=>{
      setTodos(todos.map((todo)=>todo.id ===id ? {...todo,completed:!todo.completed}:todo))
    }

    const deleteTodo=(id)=>{
      setTodos(todos.filter((todo)=> todo.id !==id))
    }

    const editTodoTask = (task,id)=>{
      setTodos(todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing}: todo))
    }

    


  return (
    <div className="TodoWrapper">
    <h1>Get Things Done !</h1>
     <AddTodo  addTodo={addTodo}/>
     {todos?.map((todo,index)=>(
         todo.isEditing ? 
         (<EditTodo editTodo={editTodoTask} task={todo}/>):
         (
          <Todo key={index} task={todo} 
          toggleComplete={toggleComplete}
           deleteTodo={deleteTodo}
           editTodo={editTodo}
           
          
       />
         )
       ))}
    </div>
  )
}

export default TodoWrapper