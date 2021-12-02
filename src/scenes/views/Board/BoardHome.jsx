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
    var [tasks] = useCollectionData(tasksQuery, { idField: "id"});

    useEffect(()=>{
        if(tasks) console.log(tasks)
    },[tasks , currentBoard])

    // const [items, setItems] = useState(useCollectionData(tasksQuery, { idField: "id"}));
    const [statuses, setStatuses] = useState([...currentBoard?.boardColumns])
    
   

    const onDrop = (item, monitor, status) => {
        console.log("status==>",status)
        tasks = tasks.filter( task=> task.id !== item.id )
        item.status =status;        
        tasks.push(item)
        console.log("onDrop updated==>",tasks)
        console.log("onDrop ==>",item)
        ref.collection('projects').doc('8WYfYowtjUqX6XmFK7Fo').collection('boards')
        .doc(currentBoard.id).collection("tasks").doc(item?.id)
        .update({ "status":status })
        // console.log("db got =>",ref.collection('projects').doc('8WYfYowtjUqX6XmFK7Fo').collection('boards')
        // .doc(currentBoard).collection("tasks").doc(item?.id).ref)
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = tasks[dragIndex];
        console.log("moved Item ==>", hoverIndex)
        tasks.filter((i, idx) => idx !== dragIndex);
        tasks.splice(hoverIndex, 0, item);

        
        // setItems(prevState => {
        //     const newItems = prevState.filter((i, idx) => idx !== dragIndex);
        //     newItems.splice(hoverIndex, 0, item);
        //     return  [ ...newItems ];
        // });
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
    // useEffect(()=>{},[tasks])

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
                        <DropWrapper onDrop={onDrop} status={col} id={col}>
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