import Button from "../Button/Button";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./TaskDetails.css"


function TaskDetails(){
    const params = useParams();
    const history = useHistory()
    const handleBackButtonClick = () =>{
        history.goBack();
    }
    return(
        <>
        <div className="bottonBack">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="DetailsContainer">
            <h2>{params.taskTitle}</h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsam eligendi aut laboriosam consectetur repellat id facere, harum quidem tempora temporibus beatae, accusantium, accusamus alias numquam sequi. Exercitationem, fugiat odio.</p> 
        </div>
        </>
    );
};

export default TaskDetails;

