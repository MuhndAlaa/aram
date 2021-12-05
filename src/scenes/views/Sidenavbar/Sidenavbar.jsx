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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect } from "react";
import firebase from "../../../firebase/firebase";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <ListItemIcon><AiOutlineFundProjectionScreen/></ListItemIcon>
            <ListItemText>
              <Accordion className="accordion-container">
                <AccordionSummary  className="accordion-title" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                  <Typography onClick={()=>{setCurrentProject(project)}}>{project.project}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content" style={{ width: "250px" }}>
                  {boards?.map((board,boardIndex)=>(
                    project.id === board.project_id ?
                    <Typography className="accordion-content-item" onClick={()=>{setCurrentBoard(board)}} key={boardIndex}>
                      <SubdirectoryArrowRightIcon style={{height:".9rem"}}/> <span>{board.board}</span>
                    </Typography> :
                    null
                  ))}
                  {(true) &&<Typography className="newBoard">   
                  <Link to={`/project/${project.id}`}><button className="add-project"><AddIcon/></button></Link>
                  <span>add a new board ...</span> 
                  </Typography>}
                  
                </AccordionDetails>
              </Accordion></ListItemText>
          </ListItem>
          ))}
        </List>
      </Drawer>

    </Box></>
  );
}
