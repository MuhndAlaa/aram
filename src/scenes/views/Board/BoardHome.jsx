import React, { useState, useEffect } from "react";
import firebase from "../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

import Card from "./Card";
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { statuses } from "./data";
import './board.scss'
const BoardHome = ({currentBoard}) => {
    const ref = firebase.firestore();
    const user = useSelector((state) => state.user); //State of user
    const tasksQuery =  user?.uid && ref.collectionGroup("tasks").where("board_id" , "==" ,currentBoard?.id)
    .where("taskAssignees", "array-contains", user?.email);
    const [tasks] = useCollectionData(tasksQuery, { idField: "id"});

    useEffect(()=>{
        if(tasks) console.log(tasks)
    },[tasks , currentBoard])

    const [items, setItems] = useState(useCollectionData(tasksQuery, { idField: "id"}));
    const [statuses, setStatuses] = useState([...currentBoard?.board])
    
   

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };


    // const addBoard = () => {
    //     let statusName = document.getElementById('newBoard').value
    //     let current = statuses.filter(board => board.status == statusName);
    //     // let statusColor = boards[document.getElementById('newBoard').getAttribute('key')].color
    //     let newBoard = {
    //         status: statusName,
    //         icon: "✅",
    //         color: current[0].color
    //     }
    //     let newBoardList
    //     if(boards){
    //         newBoardList = [...boards]
    //     } else {
    //         newBoardList = boards
    //     }
    //     newBoardList.push(newBoard);
    //     dropDownItems.push(statusName)

    //     setDropDown(statuses.filter(stat => dropDownItems? dropDownItems.indexOf(stat.status) == -1 : statuses ))

    //     console.log(newBoardList);
    //     setBoards(newBoardList);
    // };

    return (
        <>
        {/* <div className="row">
            <select name="newBoard" id="newBoard">
                {dropDown.map ((s, i) => {
                    return (
                        <option key={i} value={s.status}>{s.status}</option>
                    );
                })}
                {/* 
                <option value="addition 2">addition 2</option>
                <option value="addition 3">addition 3</option>
            </select>
            <button onClick={addBoard}>Add Board</button>
        </div> */}
        <div className="boardview">
        {currentBoard?.boardColumns?.map((col, i) => {
                return (
                    <div key={i} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{col}</h2>
                        <DropWrapper onDrop={onDrop} status={col}>
                            <Col className="board-col">
                                {tasks && tasks
                                    .filter(task => task.status === col)
                                    .map((task, idx) => {  
                                        return <Card key={task.id} item={task} index={idx} moveItem={moveItem} status={task.status} />
                                    })
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default BoardHome;