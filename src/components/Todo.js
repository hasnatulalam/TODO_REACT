import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,toggleComplete ,deleteTodo,editTodo}) => {
  return (
    <div className="Todo">
           <p className={`${task.complete ? 'complete':''}`} onClick={()=>toggleComplete(task.id)}>{task?.task}</p> 
           <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>editTodo(task.id)}  />
        <FontAwesomeIcon className="delete-icon" icon={faTrash}  onClick={()=>deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo