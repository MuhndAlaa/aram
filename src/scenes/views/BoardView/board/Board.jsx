import './Board.scss';
import {FiMoreHorizontal} from 'react-icons/fi';
import { Card } from '../card/Card';
import {DropDown} from '../DropDown/DropDown';
import { Editable } from '../edit-table/Editable';
import { useState } from 'react';

const Board =(props)=>{

    const [showDropDown, setShowDropDown] = useState(false);

    return(
        <div className="board">
            <div className="board-top">
                <p className="board-top-title">{props.board?.title}<span>{`${props.board?.cards?.length}`}</span></p>
                <div className="board-top-more">
                    <FiMoreHorizontal onClick={()=>setShowDropDown(true)}></FiMoreHorizontal>
                    {
                        showDropDown &&
                        <DropDown onClose={()=>setShowDropDown(false)}>
                            <div className="board-dropdown">
                                <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                            </div>
                        </DropDown>

                    }
                </div>
            </div>
            <div className="board-cards custom-scroll">
                {
                    props.board?.cards?.map(item=><Card key={item.id} 
                        card={item} 
                        removeCard={props.removeCard} 
                        boardId={props.board?.id}
                        handleDragEnter={props.handleDragEnter}
                        handleDragEnd={props.handleDragEnd}
                    />)
                }
                <Editable displayClass="board-cards-add" text="Add Card" placeholder="Enter Card Title"
                    onSubmit={(value)=>props.addCard(value, props.board?.id)}
                ></Editable>

            </div>
        </div>
    );
}
export default Board