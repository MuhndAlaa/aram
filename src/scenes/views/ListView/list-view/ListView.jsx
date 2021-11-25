import { useState } from 'react';
import { Editable } from '../../BoardView/edit-table/Editable';
import { List } from '../list/List';
import './ListView.scss';

const ListView = (props) => {
  

    const [projects, setProjects] = useState([
        {
            id: Date.now() + Math.random()*2,
            title: "sprint 1",
            cards: [{
                id: Date.now() + Math.random(),
                title: "card 1",
                status: "todo",
            },
            {
                id: Date.now() + Math.random(),
                title: "card 2",
                status: "inprogress",
            },
            {
                id: Date.now() + Math.random(),
                title: "card 6",
                status: "completed",
            },
            ]
        },
        {
            id: Date.now() + Math.random()*2,
            title: "sprint 2",
            cards: [{
                id: Date.now() + Math.random(),
                title: "card 3",
                status: "todo",
            },
            {
                id: Date.now() + Math.random(),
                title: "card 4",
                status: "ready",
            },
            {
                id: Date.now() + Math.random(),
                title: "card 5",
                status: "completed",
            },
            ]
        },
    ]
    );

    const addCard = (title, bid) => {
        const card = {
            id: Date.now() + Math.random(),
            title,
            labels: [],
            tasks: [],
            date: "",
            desc: ""
        };
        const index = projects.findIndex(item => item.id === bid)
        if (index < 0) return;

        const tempProjects = [...projects];
        tempProjects[index].cards.push(card);
        setProjects(tempProjects);
    };

    const removeCard = (cid, Pid) => {
        const bIndex = projects.findIndex(item => item.id === Pid)
        if (bIndex < 0) return;

        const cIndex = projects[bIndex].cards.findIndex(item => item.id === cid)
        if (cIndex < 0) return;

        const tempProjects = [...projects]
        tempProjects[bIndex].cards.splice(cIndex, 1)
        setProjects(tempProjects);
    };


    const addList = (title) => {
        setProjects([...projects, {
            id: Date.now + Math.random(),
            title,
            cards: [],
        },
        ]);
    };

    const removeList = pid => {
        const tempProjects = projects.filter(item => item.id !== pid)
        setProjects(tempProjects);
    };

    return (
        <>
        <div className="container">
            <div className="listview">
                {
                    projects.map((item, index) => <List key={index} 
                    list={item} 
                    removeList={removeList}
                    removeCard={removeCard} 
                    addCard={addCard}/>)
                }
                <Editable displayClass="list-cards-add" text="+ New list" placeholder="Enter task Title"
                        onSubmit={(value)=>addList(value)}
                ></Editable>
            </div>
        </div>
        </>
    )
}
export { ListView }