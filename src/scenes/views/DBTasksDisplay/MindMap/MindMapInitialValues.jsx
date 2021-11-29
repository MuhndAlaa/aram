const initaialElements =[
    { id: '1', type: 'input', data: { label: 'The Project Title' }, position: { x: 600, y: 50 }, className: 'project-node' }
    ,{ id:'2', type: 'input', data: { label:'Board No. 1' }, position: { x: 400, y: 200 },
     className: 'board-node', sourcePosition: 'top', targetPosition: 'bottom' }
     ,{ id:'3', type: 'input', data: { label:'Board No. 2' }, position: { x: 600, y: 200 },
     className: 'board-node', sourcePosition: 'top', targetPosition: 'bottom' }
     ,{ id:'4', type: 'input', data: { label:'Board No. 3' }, position: { x: 800, y: 200 },
     className: 'board-node', sourcePosition: 'top', targetPosition: 'bottom' }
     ,{ id: '5', type: 'input', data: { label: 'Not Opened Task'}, position: { x: 300, y:400}, className: `notOpened-task-node`
     , sourcePosition: 'top', targetPosition: 'bottom' }
     ,{ id: '6', type: 'input', data: { label: 'In Progress Task'}, position: { x: 500, y:400}, className: `inProgress-task-node`
     , sourcePosition: 'top', targetPosition: 'bottom' }
     ,{ id: '7', type: 'input', data: { label: 'Completed Task'}, position: { x: 800, y:400}, className: `completed-task-node`
     , sourcePosition: 'top', targetPosition: 'bottom' }
    //  Links
    ,{ id: `e1-2`, className: 'project-board', type: 'smoothstep', source: '1', target:'2' }
    ,{ id: `e1-3`, className: 'project-board', type: 'smoothstep', source: '1', target:'3' }
    ,{ id: `e1-4`, className: 'project-board', type: 'smoothstep', source: '1', target:'4' }
    ,{ id: `e2-5`, animated: true, type: 'smoothstep', className: `notOpened-link`, source: '2', target: '5' }
    ,{ id: `e2-6`, animated: true, type: 'smoothstep', className: `inProgress-link`, source: '2', target: '6' }
    ,{ id: `e4-7`, animated: false, type: 'smoothstep', className: `completed-link`, source: '4', target: '7' }
]
export default initaialElements;