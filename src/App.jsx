import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import TaskDetails from "./components/TaskDetails/TaskDetails"

function App() {
const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Carregando...",
      completed: true,
    },
  ]);

  useEffect(()=>{
    const fechTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data)
    };
    fechTasks()
  }, [])

  const handleTaskClick = (taskID) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskRemove = (taskID) => {
    const newTask = tasks.filter((task) => task.id != taskID);
    setTasks(newTask);
  };

  return (
    <Router>
      <div className="Container">
        <Header />
    
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={() => <TaskDetails />} />
 
      </div>
    </Router>
  );
}

export default App;
