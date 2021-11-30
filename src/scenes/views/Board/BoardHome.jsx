import React, { useState, useEffect } from "react";
import firebase from "../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

import Card from "./Card";
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { statuses } from "./data";
import './board.scss'
const BoardHome = ({currentProject}) => {
    const [items, setItems] = useState();
    const [boards, setBoards] = useState([])
    const project_id ='ODmhjrhsHZLpcAw3M79x';
    const ref = firebase.firestore();
    const user = useSelector((state) => state.user); //State of user

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
    const tasksQuery =()=>{
        console.log("id ==>",currentProject?.id)
        ref.collection('projects').doc(project_id).collection('boards')
        .where("boardAssigneesEmails", "array-contains", user.email).get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
              console.log('LOG 1', doc.data());
              setBoards(state=>[...state,doc.data()])
              ref.collection('projects').doc(project_id).collection('boards').doc(doc.id).collection('tasks')
                .where("taskAssignees", "array-contains", user.email).get()
                .then(querySnapshot => {
                    querySnapshot.docs.map(doc => {
                    console.log('Task 1', doc.data());
                    setItems(state => [...state,doc.data()]);
                    })
                })
            })
        })
        
    }
    async function renderTasks(){
        await tasksQuery();
      }
    
      useEffect(() => {
        setItems([]);
        renderTasks();
      }, [currentProject, user])

    
    
    

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
        {statuses.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.progress.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col className="board-col">
                                {items && items
                                    .filter(task => task.status === s.status)
                                    .map((task, idx) => 
                                    <Card key={task.id} item={task} index={idx} moveItem={moveItem} status={s} />
                                    )
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