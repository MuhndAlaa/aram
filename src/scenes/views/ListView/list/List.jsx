import { useState } from 'react';
import ListCard from '../list-card/ListCard';
import {IoIosArrowDropdown} from 'react-icons/io'
import {FcDeleteRow} from 'react-icons/fc'
import './List.scss';
import {Editable} from '../../BoardView/edit-table/Editable'

const List =(props)=> {
    const [projectDropDown,setProjectDropDown] = useState(true);
    // const [projectDel,setProjectDel] = useState(false);

    const projectDd =()=>{
        setProjectDropDown(!projectDropDown);
    }
    // const projectDelTask =()=>{
    //     setProjectDel(!projectDel);
    // }
    return(
        <>
            <div className="list mt-4 p-3">
                <div className="list-title">
                    <div className="d-flex">
                        <IoIosArrowDropdown className="mt-2 fs-3 me-2 text-muted" onClick={projectDd}/>
                        <div className="list-header">
                            <h2 className="text-danger">{props.list?.title}</h2>   
                            <FcDeleteRow className="fs-1" onClick={()=>props.removeList(props.list?.id)}/>
                        </div>
                    </div>
                </div>
                {
                    projectDropDown&&
                    <div className="listCard">
                        {
                            props.list?.cards?.map((item, index)=><ListCard key={index} 
                            id={item.status} 
                            listcard={item}
                            listId={props.list?.id}
                            removeCard={props.removeCard}/>)
                        }
                    </div>
                }
                <Editable displayClass="list-cards-add" text="+ New task" placeholder="Enter task Title"
                    onSubmit={(value)=>props.addCard(value, props.list?.id)}
                ></Editable>
                {/* <Button className="text-muted newTaskBtn">+New task</Button> */}
            </div>
        </>
    )
}
export {List}