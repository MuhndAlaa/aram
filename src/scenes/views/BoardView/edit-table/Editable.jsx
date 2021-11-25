import './Editable.scss';
import {VscClose} from 'react-icons/vsc';
import { useState } from 'react';


const Editable =(props)=>{
    const [showEdit,setShowEdit] = useState(false)
    const [inputValue,setInputValue] = useState("")
    return(
        <>
            <div className="editable">
                {
                    showEdit ? (
                        <form className={`editable-edit ${props.editClass} || "" `} onSubmit={(event)=>{
                            event.preventDefault()
                            if(props.onSubmit)props.onSubmit(inputValue)
                            setShowEdit(false)
                            setInputValue("");
                        }}>
                            <input autoFocus type="text" placeholder={props.placeholder || "Enter Item"} 
                            value={inputValue}
                            onChange={(e)=>setInputValue(e.target.value)}
                            />
                            <div className="editable-edit-footer">
                                <button type="submit">{props.buttonText || "Add"}</button>
                                <VscClose onClick={()=> setShowEdit(false)}/>
                            </div>
                        </form>
                    ) : (
                        <p className={`editable-display ${props.displayClass} || "" `} onClick={()=> setShowEdit(true)}>{props.text || "Add Item"}</p>)
                }
            </div>
        </>
    )
}
export {Editable}