import { useEffect, useRef } from 'react'


const DropDown =(props)=>{
    const dropdownRef = useRef();
    
    const handleClick= (event) =>{
        if(dropdownRef && !dropdownRef?.current?.contains(event?.target))
        {
            if(props.onClose) props.onClose();
        }
        
    };

    useEffect(() => {
        document.addEventListener('click',handleClick)
        return () => {
            document.removeEventListener('click',handleClick)
        }
    })

    return(
        <>
            <div className="dropdown" style={{ position:"absolute",top:"100%",right:"0"}}>
                {props.children}
            </div>
        </>
    )
}
export {DropDown}