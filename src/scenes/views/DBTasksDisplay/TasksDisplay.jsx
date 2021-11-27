import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MindMapComponent from './MindMap/MindMapComponent';
import {BoardView} from '../BoardView/board-view/BoardView'
import { useEffect ,useState } from "react";

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
    if(currentProject)console.log(currentProject)
  },[currentProject])
  return (
    <div className="view-container">
      <Box sx={{ width: '100%', margin: '1rem auto', marginTop: '0', borderBottom: '1px solid black', padding: '1rem' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="mind map" onClick={()=>{setCurrentView("mindmap")}}/>
          <LinkTab label="drag and drop" onClick={()=>{setCurrentView("dragndrop")}} />
          <Stack spacing={2} direction="row">
            <Button variant="contained">userS</Button>

          </Stack>
        </Tabs>
      </Box>
      {currentView === "mindmap" ? <MindMapComponent currentProject={currentProject} /> : null}
      {currentView === "dragndrop" ? <BoardView/>: null}
      
      {/* <h4 className='tasks-display text-black' >for the views components to be diplayed</h4>
            <h4 className='tasks-display text-black' >Current Project is: {currentProject}</h4>
            <h4 className='tasks-display text-black' >Current Board is: {currentBoard}</h4> */}
    </div>
  )
}
export default TasksDisplay;