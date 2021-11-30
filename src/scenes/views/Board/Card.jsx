import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import CardWindow from "./CardWindow";
import ITEM_TYPE from "./type"
import './board.scss'

const Card = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className="d-flex justify-content-between align-items-center">
                    <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                    <p style={{ color: status.color }}>{item.dueDate}</p>
                    
                </div>
                    
                <p className={"item-title"}>{item.title}</p>
                <p className={"item-status"}>{status.icon}</p>
            </div>
            <CardWindow
                item={item}
                onClose={onClose}
                show={show}
            />
        </>
    );
};

export default Card;