import React from "react";
import { useHistory } from "react-router-dom";
import {CgInfo} from "react-icons/cg"
import "./Task.css";


function Task({ task, handleTaskClick, handleTaskRemove }) {
  const history = useHistory();

  const handleTaskDetailsClick = () =>{
    history.push(`/${task.title}`)
  }

  
  return (
    <div className="taskContainerGeral">
      <div
        onClick={() => handleTaskClick(task.id)}
        className="taskContainer"
        style={
          task.completed ? { borderLeft: "6px solid rgb(255, 0, 64)" } : {}
        }
      >
        <div className="taskTitle">{task.title}</div>
      </div>
      <div className="buttonsContainer">
        <button className="removeTaskButton" onClick={() => handleTaskRemove(task.id)}>X</button>
      </div>
      <div>
        <button className="infoTaskButton" onClick={handleTaskDetailsClick}><CgInfo/></button>
      </div>
    </div>
  );
}

export default Task;
