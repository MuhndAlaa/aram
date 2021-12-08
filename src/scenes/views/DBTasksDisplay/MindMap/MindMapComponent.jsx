import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';
import { useState, useEffect } from 'react';
import initaialElements from './MindMapInitialValues';
import firebase from "../../../../firebase/firebase";
import './MindMapComponent.scss';

function MindMapComponent({currentProject}) {
  const ref = firebase.firestore();
  const [boardsNodes, setBoardsNodes] = useState([]);
  const [nodes, setNodes] = useState(initaialElements)
  const [links, setLinks] = useState([])


  async function getNodes(){
    const projectNode = { id: '1', type: 'input', data: { label: currentProject?.project }, position: { x: 600, y: 50 }, className: 'project-node' }
    setBoardsNodes(state => [...state, projectNode]);
    await ref.collection('projects').doc(currentProject?.id).collection('boards').get().then((querySnapshot) => {
        querySnapshot && querySnapshot.forEach((doc) => {
          setBoardsNodes(state => [...state, { id: doc.id, type: 'input', data: { label: doc.data().board }, position: { x: ((state.length + 1) * 200), y: 200 }, className: 'board-node', sourcePosition: 'top', targetPosition: 'bottom' }])
          setLinks(state => [...state, { id: `e1-${doc.id}`, className: 'project-board', type: 'smoothstep', source: '1', target: doc.id }])
          
          ref.collection('projects').doc(currentProject.id).collection('boards').doc(doc.id).collection('tasks').get().then((docs) => {
            docs && docs.forEach((docTask) => {            
                const animated = (docTask) => { if (docTask.data().status === 'inProgress' || docTask.data().status === 'notOpened') { return true } else { return false; } }
                setBoardsNodes(state => [...state, { id: docTask.id, type: 'input', data: { label: docTask.data().title }, position: { x: (state.length - boardsNodes.length) * 100, y: (state.length * 60) + 100 }, className: `${docTask.data().status}-task-node`, sourcePosition: 'top', targetPosition: 'bottom' }])
                setLinks(state => [...state, { id: `e-${docTask.id}`, animated: animated(docTask), type: 'smoothstep', className: `${docTask.data().status}-link`, source: doc.id, target: docTask.id }])
              });
            })
        })
      })   
  }

  async function renderNodes(){
    await getNodes();
  }

  useEffect(() => {
    setBoardsNodes([]);
    setLinks([]);
    renderNodes();
  }, [currentProject])

  const onConnect = (params) => { setNodes(els => addEdge(params, els)) }
  const onLoad = (reactFlowInstance) => { reactFlowInstance.fitView() }
  return <>
  {!currentProject && <p className="tutorial-text alert alert-info">welcome to our demo mind map, Choose one of your projects from the side bar to start tracking the team work progress</p>}
    {true ?
      <ReactFlow
        elements={(currentProject)?[...boardsNodes, ...links]:nodes}
        style={{ width: '100%', height: '84vh', boarder: '2px' }}
        onLoad={onLoad}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: 'red', strokeWidth: 2 }}
        connectionLineType='bezier'
        snapToGrid={true}
        snapGrid={[16, 16]}
      >
        <Background variant="dots"
          color='#eee'
          gap={30}
          size={1} />
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
      : "Loading"}

  </>
}
export default MindMapComponent;