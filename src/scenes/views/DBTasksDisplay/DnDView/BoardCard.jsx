import {useState} from 'react';
import "../ListDrop/ListDragDrop.scss";


const BoardCard =({task})=>{

    return (
    <>
        <h4>{task.title}</h4>
        <div className="task-content">
        <p>{task.dueDate}</p>
        
        </div>
        
    </>)
}
export default BoardCard;