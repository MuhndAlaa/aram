import { useState } from "react";
import Board from "../board/Board"
import { Editable } from "../edit-table/Editable";
import './BoardView.scss'

const BoardView = () => {

    const [target, setTarget] = useState({
        cid: "",
        bid: "",
    });

    const [boards, setBoards] = useState([
        {
            id: Date.now() + Math.random() * 2,
            title: "TODO",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "Card 1",
                    tasks: [],
                    labels: [
                        {
                            text: "Frontend",
                            color: "purple",
                        }
                    ],
                    desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
                    date: "",
                },
                {
                    id: Date.now() + Math.random(),
                    title: "Card 2",
                    tasks: [],
                    labels: [
                        {
                            text: "Backend",
                            color: "skyblue",
                        }
                    ],
                    desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
                    date: "",
                }
            ]
        }
    ]);

    const addCard = (title, bid) => {
        const card = {
            id: Date.now() + Math.random(),
            title,
            labels: [],
            tasks: [],
            date: "",
            desc: ""
        };
        const index = boards.findIndex(item => item.id === bid)
        if (index < 0) return;

        const tempBoards = [...boards];
        tempBoards[index].cards.push(card);
        setBoards(tempBoards);
    };

    const removeCard = (cid, bid) => {
        const bIndex = boards.findIndex(item => item.id === bid)
        if (bIndex < 0) return;

        const cIndex = boards[bIndex].cards.findIndex(item => item.id === cid)
        if (cIndex < 0) return;

        const tempBoards = [...boards]
        tempBoards[bIndex].cards.splice(cIndex, 1)
        setBoards(tempBoards);
    };

    const addBoard = (title) => {
        setBoards([...boards, {
            id: Date.now + Math.random(),
            title,
            cards: [],
        },
        ]);
    };

    const removeBoard = bid => {
        const tempBoards = boards.filter(item => item.id !== bid)
        setBoards(tempBoards);
    };


    const handleDragEnd = (cid, bid) => {
        console.log(cid, bid)
        let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

        s_bIndex = boards.findIndex((item) => item.id === bid);
        if (s_bIndex < 0) return

        s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
        if (s_cIndex < 0) return

        t_bIndex = boards.findIndex((item) => item.id === target.bid);
        if (t_bIndex < 0) return

        t_cIndex = boards[t_bIndex].cards?.findIndex((item) => item.id === target.cid);
        if (t_cIndex < 0) return

        const tempBoards = [...boards]
        const tempCard = tempBoards[s_bIndex].cards[s_cIndex]

        tempBoards[s_bIndex].cards.splice(s_cIndex, 1)
        tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard)

        setBoards(tempBoards)
    };

    const handleDragEnter = (cid, bid) => {
        setTarget({
            cid,
            bid,
        });
    };

    return (
        <>
            <div className="container">
                <div className="view">
                    <div className="view-navbar">
                        <h2>Aram</h2>
                    </div>
                    <div className="view-outer">
                        <div className="view-boards">
                            {
                                boards.map((item) => <Board key={item.id}
                                    board={item}
                                    removeBoard={removeBoard}
                                    addCard={addCard}
                                    removeCard={removeCard}
                                    handleDragEnd={handleDragEnd}
                                    handleDragEnter={handleDragEnter}
                                />)
                            }
                            <div className="view-boards-board">
                                <Editable text="Add Board" placeholder="Enter Board Title" displayClass="view-boards-board-add"
                                    onSubmit={(value) => addBoard(value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export { BoardView }