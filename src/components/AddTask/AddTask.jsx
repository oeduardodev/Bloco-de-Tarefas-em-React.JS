import { useState } from "react";
import Button from "../Button/Button";
import "./AddTask.css";

function AddTask({handleTaskAddition}) {
  const [InputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(InputData);
    setInputData("")
  }

  return (
    <div className="AddTaskContainer">
      <input
        onChange={handleInputChange}
        value={InputData}
        className="AddTaskInput"
        type="text"
      />
      <div className="AddTaskButtonContainer">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;
