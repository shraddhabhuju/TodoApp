import PropTypes from 'prop-types'
import { useState } from 'react'

import Header from "./components/Header"
import Task from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
   const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text:'finish reactAPP',
                day : '5th july',
                reminder: true,
            },
            {
                id: 1,
                text:'finish reactAPP',
                day : '5th july',
                reminder: true,
            }

        ]
    )
    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random()*1000 +1)
      const newTask = {id, ... task }
      setTasks([...tasks, newTask])
    }
    //delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !==id))
    }
    //toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=> task.id ===id? {...task, reminder: !task.reminder}:task))
    }
  return (
    <div className="container">
     <Header onAdd ={() => setShowAddTask(!showAddTask)} showAddTask ={showAddTask}/>
     {showAddTask && <AddTask onAdd = {addTask}/>}
     {tasks.length >0 ? 
     (<Task tasks= {tasks} 
     onDelete = {deleteTask} onToggle={toggleReminder}
     />): ('No tasks to do ')
}
    </div>
  );
}

export default App;
