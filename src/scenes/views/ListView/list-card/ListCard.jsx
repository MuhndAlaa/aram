import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io'
import { AiOutlineDelete } from 'react-icons/ai'
import './ListCard.scss';

function ListCard(props) {
    const [listCardDropDown, setListCardDropDown] = useState(false);

    const listCardDd = () => {
        setListCardDropDown(!listCardDropDown);
    }

    return (
        <>
            <div className="list-card m-4">
                <div className="d-flex">
                    <IoIosArrowDropdown className="fs-5 text-muted mt-1 me-2" onClick={listCardDd} />
                    <div className="list-card-header">
                        <div className="list-card-status fw-bold"> {props.listcard?.status}</div>
                        <AiOutlineDelete className="fs-5 " onClick={() => props.removeCard(props.listcard?.id, props.listId)}></AiOutlineDelete>
                    </div>
                </div>
                {
                    <>
                        {
                            listCardDropDown &&
                            <ul className="list-card-tasks">
                                <li className="">{props.listcard?.title}</li>
                            </ul>
                        }
                    </>

                }
            </div>
        </>
    )
}

export default ListCard
