import ReactFlow, {addEdge, Background, Controls, MiniMap} from 'react-flow-renderer';
import {useState, useEffect} from 'react';
import firebase from "../../../../firebase/firebase";
import  './MindMapComponent.scss';

function MindMapComponent ({currentProject}){ 
    const ref = firebase.firestore();
    const [boardsNodes, setBoardsNodes] = useState([]);
    const [boardsIds,setBoardsIds] = useState([]);
    const [nodes, setNodes] =useState()
    const [links,setLinks] = useState([])

    
    const getBoards = (id)=>{
      const projectNode = {id:'1', type:'input', data:{label:currentProject.project}, position:{x:600,y:50}, className:'project-node'}
    setBoardsNodes(boardsNodes.push(projectNode));
      Promise.resolve(ref.collection('projects').doc(id).collection('boards').get())
      .then((querySnapshot)=>{
        querySnapshot && querySnapshot.forEach((doc) =>{
          setBoardsIds(boardsIds.push(doc.id));
          setBoardsNodes(boardsNodes.push({id: `${boardsNodes.length+1}` , type:'input', data:{label:doc.data().board}, position:{x:((boardsNodes.length+1)*200),y:200},className:'board-node', sourcePosition:'top',targetPosition:'bottom'}))
          setLinks(links.push({id:`e1-${boardsNodes.length}`, className:'project-board',type:'smoothstep',source:'1',target:`${boardsNodes.length}`}))
        })
      })
      .then(()=>{
        console.log(boardsIds);
        boardsIds.forEach((board_id)=>{
          Promise.resolve(ref.collection('projects').doc(currentProject.id).collection('boards').doc(board_id).collection('tasks').get())
          .then((docs)=>{
            docs.forEach((doc)=>{
              const animated = (doc)=>{if(doc.data().status ==='inProgress'||doc.data().status ==='notOpened'){return true}else{return false;}}
              setBoardsNodes(boardsNodes.push({id:`${boardsNodes.length+1}`, type:'input', data:{label:doc.data().title}, position:{x:(boardsNodes.length+1-boardsIds.length)*100,y:(boardsNodes.length*60)+100},className:`${doc.data().status}-task-node`, sourcePosition:'top',targetPosition:'bottom'}))
              setLinks(links.push({id:`e${boardsIds.indexOf(board_id)+2}-${boardsNodes.length}`, animated:animated(doc),type: 'smoothstep', className:`${doc.data().status}-link`,source:`${boardsIds.indexOf(board_id)+2}`,target:`${boardsNodes.length}`}))
            });setNodes([...boardsNodes,...links])
          })
        })
      }) 
    }
    
    useEffect(()=>{currentProject&& getBoards(currentProject.id)},[currentProject])

    const onConnect =(params)=>{setNodes(els=>addEdge(params,els))} 
    const onLoad = (reactFlowInstance)=>{reactFlowInstance.fitView()}
    return<>
    <ReactFlow
     elements={nodes}
     style={{width:'100%',height:'90vh',boarder:'2px'}}
     onLoad ={onLoad}
     onConnect ={ onConnect}
     connectionLineStyle ={{stroke:'red',strokeWidth:2}}
     connectionLineType ='bezier'
     snapToGrid ={true}
     snapGrid ={[16,16]}
     >
         <Background variant="dots"
         color='#eee'
      gap={30}
      size={1}/>
     <MiniMap nodeColor={(node) => {
        switch (node.type) {
          case 'output':
            return 'rgb(0,0,255)';
          case 'input':
            return 'rgb(0,0,255)';
          case 'Task':
            return 'rgb(0,0,255)';
          default:
            return '#eee';
        }
      }} />
    <Controls />
    </ReactFlow>
    </>
}
export default MindMapComponent;