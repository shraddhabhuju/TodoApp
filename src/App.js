import PropTypes from 'prop-types'
import { useState } from 'react'

import Header from "./components/Header"
import Task from './components/Tasks';

function App() {

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
    //delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !==id))
    }
  return (
    <div className="container">
     <Header/>
     {tasks.length >0 ? 
     (<Task tasks= {tasks} 
     onDelete = {deleteTask}
     />): ('No tasks to do ')
}
    </div>
  );
}

export default App;
