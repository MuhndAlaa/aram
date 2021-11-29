import React, { useState } from "react";
import Card from "./Card";
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { data, statuses } from "./data";
import './board.scss'
const BoardHome = () => {
    const [items, setItems] = useState(data);
    const [dropDownItems, setDropDownItems] = useState([])
    const [dropDown, setDropDown] = useState(statuses)
    const [boards, setBoards] = useState([])

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

    const addBoard = () => {
        let statusName = document.getElementById('newBoard').value
        let current = statuses.filter(board => board.status == statusName);
        // let statusColor = boards[document.getElementById('newBoard').getAttribute('key')].color
        let newBoard = {
            status: statusName,
            icon: "✅",
            color: current[0].color
        }
        let newBoardList
        if(boards){
            newBoardList = [...boards]
        } else {
            newBoardList = boards
        }
        newBoardList.push(newBoard);
        dropDownItems.push(statusName)

        setDropDown(statuses.filter(stat => dropDownItems? dropDownItems.indexOf(stat.status) == -1 : statuses ))

        console.log(newBoardList);
        setBoards(newBoardList);
    };

    return (
        <>
        <div className="row">
            <select name="newBoard" id="newBoard">
                {dropDown.map ((s, i) => {
                    return (
                        <option key={i} value={s.status}>{s.status}</option>
                    );
                })}
                {/* 
                <option value="addition 2">addition 2</option>
                <option value="addition 3">addition 3</option> */}
            </select>
            <button onClick={addBoard}>Add Board</button>
        </div>
        <div className="row boardview">
            {boards.length > 0? boards.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Card key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                );
            }): <div>Empty</div>}
        </div>
        </>
    );
};

export default BoardHome;