import { FiMoreHorizontal, FiCheckSquare, FiEdit } from 'react-icons/fi';
import { FaUserClock } from 'react-icons/fa';
import { Chip } from '../chip/Chip';
import './Card.scss';
import { DropDown } from '../DropDown/DropDown';
import { useState } from 'react';
import { CardInfo } from './cardInfo/CardInfo';

const Card = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {
                showModal && <CardInfo onClose={()=>{setShowModal(false)}}/>
            }
            <div className="card" draggable
                // onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
                // onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
                onClick={()=>setShowModal(true)}
            >
                <div className="card-top">
                    <div className="card-labels">
                        {
                            props.card?.labels?.map((item, index) => <Chip key={index} text={item.text} color={item.color} />)
                        }
                        {/* <Chip text="frontend" color="green"></Chip> */}
                    </div>
                    <div className="card-top-more">
                        <FiMoreHorizontal onClick={() => setShowDropDown(true)}></FiMoreHorizontal>
                        <FiEdit className="mx-2" ></FiEdit>
                        {
                            showDropDown &&
                            <DropDown onClose={() => setShowDropDown(false)}>
                                <div className="card-dropdown">
                                    <p onClick={() => props.removeCard(props.card?.id, props.boardId)}>Delete Card</p>
                                </div>
                            </DropDown>

                        }
                    </div>
                </div>
                <div className="card-title">
                    {props.card?.title}
                </div>
                <div className="card-footer">
                    {
                        props.card?.date && (
                            <p><FaUserClock /> {props.card?.date}</p>
                        )
                    }
                    <p><FiCheckSquare /> 1/4</p>
                </div>
            </div>
        </>
    )
}
export { Card }