import ReactFlow, {addEdge, Background, Controls, MiniMap} from 'react-flow-renderer';
import {useState, useEffect} from 'react';
import firebase from "../../../../firebase/firebase";
import MindMapComponent from './MindMapComponent';
function MindMap (props){
    const [project,setProject] = useState('');
    const ref = firebase.firestore();
    useEffect(()=>{
      ref.collection("projects").doc('ODmhjrhsHZLpcAw3M79x').get().then((doc)=>{setProject(doc.data().project);})
    },[])
          
    return(<>
        <MindMapComponent Plabel={project} p_id='ODmhjrhsHZLpcAw3M79x'/>
    </>)
}
export default MindMap;