import React, {useState} from 'react';
import './Todo.scss';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../../landing-page/navbar/Navigation';

const item = {
  id: v4(),
  name: "Clean the house"
}

const item2 = {
  id: v4(),
  name: "Wash the car"
}

function Todo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState("")
  const [details, setdetails] = useState("")
  const [state, setState] = useState({
    "todo": {
      title: "Todo",
      items: [item, item2]
    },
    "in-progress": {
      title: "In Progress",
      items: []
    },
    "done": {
      title: "Completed",
      items: []
    }
  })

  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      let newItem = [...prev.todo.items]
      if(text !== ""){
        newItem.unshift({
          id: v4(),
          name: text,
          details: details
        })
      }
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            ...newItem
            // ...prev.todo.items
          ]
        }
      }
    })

    setText("")
    setdetails("")
    
  }

  return (
    <>
      <Navigation/>
    <section className='marg_top'>
       
      <div className="d-flex justify-content-evenly">
      <button className="forms_btn m-3"  onClick={handleShow}>
        ADD your todo !!
      </button>

      <Modal className="toDoModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add title and content for your task !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label for="text" className="fs-4">Title</label>
          <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <label for="text" className="fs-4">Details</label>
        <input className="details" type="text" value={details} onChange={(e) => setdetails(e.target.value)}/></Modal.Body>
        <Modal.Footer>
      
          <button className="forms_btn mx-0" onClick={addItem}>
                Add  </button>
        </Modal.Footer>
      </Modal>
        
      {/* <button onClick={addItem}>Add</button>   */}
      </div>
      <div className="Todo__container">
      <DragDropContext  onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className="column-title">
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                              // console.log(snapshot)
                              return(
                                <div
                                  className={`item ${snapshot.isDragging && "dragging"}`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <span className="todo__title">{el.name}</span>
                                  <br/>
                                  <span className="todo__details"> {el.details}</span>
                                  
                                  
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
      </div>
 
    </section>
    </>
  
  );
}

export default Todo;
