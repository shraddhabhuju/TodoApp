import React from 'react'
import Task from './Task'



function Tasks({tasks,onDelete, onToggle }) {
   
    return (
        <>
           {tasks.map((task =>(
              <Task task ={task} onToggle = {onToggle} onDelete={onDelete} />
           )))} 
        </>
    )
}

export default Tasks
