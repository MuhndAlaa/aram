import {useParams } from "react-router-dom";
import SpaceCreate from './SpaceCreate';
import './forms.scss';

function BoardTab(){
    let { id } = useParams();

    return <>
        <SpaceCreate title='board' projId={id}/>
     </>
}

export default BoardTab;