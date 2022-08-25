import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'Fri',
      reminder: false,
    }
  ])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>  
  )
}

export default App
