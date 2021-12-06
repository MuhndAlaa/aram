import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../firebase/firebase";
import { GrProjects } from 'react-icons/gr';
import ClearIcon from '@mui/icons-material/Clear';

import "./Sidenabar.scss";

const drawerWidth = 350;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ assigneeProjects, boards, setCurrentProject, setCurrentBoard }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function toggleAccordion(e) {
    
    if (e.target.classList.contains('sidebar-accordion')) {
      e.target.classList.toggle("active");
      let panel = e.target.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    } else if (e.target.tagName === "H4") {
      e.target.parentElement.classList.toggle("active");
      let panel = e.target.parentElement.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    } else {
      return
    }
  }
  const ref = firebase.firestore();
  const user = useSelector((state) => state.user); //State of user
  const deleteProject =(project)=>{
    ref.collection('projects').doc(project.id).delete();
    alert("you have deleted this project Successfully")
  }
  
  useEffect(() => {
  }, [boards])

  return (<>
    
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />


      <Drawer className="Drawer_container" variant="permanent" open={open}>
      
      <Toolbar position="fixed" open={open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="pe-5 me-5" variant="h6" noWrap component="div">
            Your Dashboard
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {!open ? null : <ChevronLeftIcon />}
          </IconButton>
    </Toolbar>
        <List>
        <Link className="home-nav" to="/">
          <ListItem>
            
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText><Typography> Home</Typography></ListItemText>
            
          </ListItem>
          </Link>
          <ListItem>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText><Typography > Notifications</Typography></ListItemText>
          </ListItem>
        </List>
        <Divider />
        <DrawerHeader className="px-0">
          <ListItem>
            <ListItemIcon><WorkspacesIcon /></ListItemIcon>
            <ListItemText className ="d-flex justify-content-between"><Typography> Work Space </Typography></ListItemText>
            <Link to="/get-started"><button className="add-project"><span class="tooltiptext">Start Creating a New Project </span><AddIcon/></button></Link>
          </ListItem>
        </DrawerHeader>
        <List className={open ? 'projects-list' : null}>
          {assigneeProjects?.map((project,projectIndex)=>(
          <ListItem key={projectIndex}>
            {open?
            <>
            <ListItemIcon><GrProjects/></ListItemIcon>
            <ListItemText>
            <div className="sidebar-projects" onClick={(e) => { toggleAccordion(e) }} data-toggle="tooltip" data-placement="top" title={project.project}>
                  <div className="sidebar-accordion">
                    <h4 onClick={() => { setCurrentProject(project) }}>{project.project.slice(0,20)}{project.project.length > 20 ? "...":null}</h4>
                   
                    {(project.created_by=== user.email)&& <ClearIcon onClick={() => { deleteProject(project) }}/>}
                  </div>

                  <div className="panel">
                    {boards?.map((board, boardIndex) => (
                      project.id === board.project_id ?
                        <p onClick={() => { setCurrentBoard(board) }} key={boardIndex} data-toggle="tooltip" data-placement="right" title={board.board}>
                          <SubdirectoryArrowRightIcon style={{ height: ".9rem" }} /> <span>{board.board.slice(0,20)}{board.board.length > 20 ? "...":null}</span>
                        </p> :
                        null
                    ))}
                    {(project.created_by=== user.email) && <p className="newBoard">
                      <Link to={`/project/${project.id}`}><button className="add-project"><AddIcon /></button></Link>
                      <span>add a new board ...</span>
                    </p>}

                  </div>
                </div>
                </ListItemText>
            </>:
            <>
            <GrProjects className="my-3 mx-1" data-toggle="tooltip" data-placement="right" title={project.project}/>
            </> }
          </ListItem>
          ))}
        </List>
      </Drawer>

    </Box></>
  );
}
