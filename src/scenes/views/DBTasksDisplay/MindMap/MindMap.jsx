import ReactFlow, {addEdge, Background, Controls, MiniMap} from 'react-flow-renderer';
import {useState, useEffect} from 'react';
import firebase from "../../../../firebase/firebase";
import MindMapComponent from './MindMapComponent';
function MindMap ({currentProject}){     
    return(<>
        <pre>{JSON.stringify(currentProject, null, 4)}</pre>
       {/* <MindMapComponent Plabel={currentProject.project} p_id={currentProject.id}/> */}
    </>)
}
export default MindMap;