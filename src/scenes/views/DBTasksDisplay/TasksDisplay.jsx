import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MindMapComponent from './MindMap/MindMapComponent';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardHome from '../Board/BoardHome';
// import {BoardView} from '../BoardView/board-view/BoardView'
import { useEffect ,useState } from "react";
import {ListView} from '../ListView/ListView'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
function TasksDisplay({ currentProject, currentBoard }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currentView , setCurrentView] = useState("mindmap");

  useEffect(()=>{
  },[currentProject , currentBoard])
  return (
    <div className="view-container">
      <Box sx={{ margin: '1rem auto', marginTop: '0', borderBottom: '1px solid black', padding: '1rem' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="mind map" onClick={()=>{setCurrentView("mindmap")}}/>
          <LinkTab label="drag and drop" onClick={()=>{setCurrentView("dragndrop")}} />
          <LinkTab label="list" onClick={()=>{setCurrentView("list")}} />
          <Stack spacing={2} direction="row">
            <Button variant="contained">userS</Button>

          </Stack>
        </Tabs>
      </Box>
      {currentView === "mindmap" ? <MindMapComponent currentProject={currentProject} /> : null}
      {currentView === "dragndrop" ? <DndProvider currentProject={currentProject} backend={HTML5Backend}><BoardHome/></DndProvider>: null}
      {currentView === "list" ? <DndProvider currentProject={currentProject} backend={HTML5Backend}><ListView currentBoard={currentBoard}/></DndProvider>: null}
      {/* <h4 className='tasks-display text-black' >for the views components to be diplayed</h4>
            <h4 className='tasks-display text-black' >Current Project is: {currentProject}</h4>
            <h4 className='tasks-display text-black' >Current Board is: {currentBoard}</h4> */}
    </div>
  )
}
export default TasksDisplay;