import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MindMapComponent from './MindMap/MindMapComponent';
import DnDView from './DnDView/DnDView';
import { useEffect ,useState } from "react";
import ReactPlayer from 'react-player';
import loader from '../../../video/loader3.mp4';

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
          <LinkTab label="your board" onClick={()=>{setCurrentView("col")}} />
          <LinkTab label="Your List" onClick={()=>{setCurrentView("list")}} />
        </Tabs>
      </Box>
      {currentView === "mindmap" ? <MindMapComponent currentProject={currentProject} /> : null}
      {(!currentProject && currentView !== "mindmap") && <div className={'ms-2 loader'}>
      <p className="tutorial-text alert alert-info">Select one of your Projects and specify your Board, and let's get some work done</p>
            <ReactPlayer
              playing={true}
              muted
              loop
              className='react-player mard'
              url={loader}
              width='30%'
              height='60vh'
            /></div>}
            {(currentProject && !currentBoard) && <div className={'ms-2 loader'}>
              <p className="tutorial-text alert alert-primary">{currentProject?.project}</p>
            <p className="tutorial-text alert alert-info">Specify your Board to render the Tasks</p>
            <ReactPlayer
              playing={true}
              muted
              loop
              className='react-player mard'
              url={loader}
              width='30%'
              height='55vh'
            />
            </div>}
          
      {currentView === "col" ? <DnDView currentView={currentView} currentProject={currentProject} currentBoard={currentBoard}  />: null}
      {currentView === "list" ? <DnDView currentView={currentView} currentProject={currentProject} currentBoard={currentBoard}  />: null}
      
    </div>
  )
}
export default TasksDisplay;