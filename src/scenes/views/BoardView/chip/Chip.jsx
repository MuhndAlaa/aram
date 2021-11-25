import './Chip.scss';
import {VscClose} from 'react-icons/vsc';

const Chip = (prop)=> {
     return(
        <>
            <div className="chip" style={{background: prop.color}}>
                {prop.text}
                {prop.close && <VscClose onClick={prop.onClose ?  prop.close() : ""}/>}
            </div>
        </>
     );
}
export {Chip}