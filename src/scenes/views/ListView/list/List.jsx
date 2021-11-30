import { useState } from "react";
import { IoIosArrowDropdown } from 'react-icons/io'
import { FcDeleteRow } from 'react-icons/fc'
import DropWrapper from "../../Board/DropWrapper";
import '../ListView.scss'
import { statuses } from "../listData";
import ListCards from "../listCards/ListCards";
import firebase from "../../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

const List = (props, { isOver }) => {
    const [items, setItems] = useState(props.list?.data);
    const className = isOver ? " highlight-region" : "";
    const [listDropDown, setListDropDown] = useState(true);
    
    //Code of backend intergration
    const ref = firebase.firestore();
    const user = useSelector((state) => state.user); //State of user
    const tasksQuery =  user?.uid && ref.collection("tasks").where("taskAssignees", "array-contains", user.email);
    const [tasks] = useCollectionData(tasksQuery, { idField: "id"});

    const listDd = () => {
        setListDropDown(!listDropDown);
    }

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (
        <div className="list mt-4 p-3 mx-2">
            <div className="list-title">
                <div className="d-flex">
                    <IoIosArrowDropdown className="mt-2 fs-3 me-2 text-muted" onClick={listDd} />
                    <div className="list-header">
                        <h2 className="text-danger">{props.list?.title}</h2>
                    </div>
                </div>
            </div>
            {
                listDropDown &&
                statuses.map(state => {
                    return (
                        <div key={state.status}>
                            <div className="d-flex">
                                <h2 className=" fs-6">{state.status.toUpperCase()}</h2>
                            </div>
                            {
                                <>
                                    <DropWrapper onDrop={onDrop} status={state.status}>
                                        <div className={`col${className}`}>
                                            {items
                                                .filter(item => item.status === state.status)
                                                .map((item, index) => <ListCards key={item.id} item={item} index={index} moveItem={moveItem} status={state}
                                                />)
                                            }
                                        </div>
                                    </DropWrapper>
                                </>
                            }
                        </div>
                    );
                })}

        </div>
    );
};

export default List;