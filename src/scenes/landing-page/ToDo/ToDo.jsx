import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';
import todo from '../../../video/list.mp4';
import todoapp from '../../../video/todo.mp4';

import './Todo.scss';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ToDo() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className="todo_bar mt-3" sx={{ bgcolor: 'background.paper', width: 1000 }}>
      <div className="ToDo-lists" id="ToDo-lists">
                    <h3 className="title">ToDo-lists</h3>
                    <h5 className="sub-title">What we Support</h5></div>
      <AppBar position="static" sx={{ width: 600 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className="tab_title"  label="Item One" {...a11yProps(0)} />
          <Tab className="tab_title" label="Item Two" {...a11yProps(1)} />
          <Tab className="tab_title" label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className="tab_body" value={value} index={0} dir={theme.direction}>


        <section className="ToDo-lists" id="ToDo-lists">
                <div className="container">
                    <div className="row justify-content-between align-items-center" >
                        <div className="ToDo__title col-lg-6 col-md-12">
                            <h1 className="cu-main-section-header__title">
                                Manage your tasks.
                            </h1>
                            <p className="fs-6">
                            	you can create your To-do List to organize your to-dos either you’re a student, working individually or even working in a company.
                            </p>

                        </div>
                        <div className='player-wrapper col-lg-6 col-md-12 float-end' data-aos="fade-left">
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={todo}
                                width='100%'
                                height='90%'
                            />
                        </div>
                    </div>
                </div>
            </section>


 
        </TabPanel>
        <TabPanel className="tab_body" value={value} index={1} dir={theme.direction}>
        <div className='player-wrapper col-lg-12 col-md-12 float-end' data-aos="fade-left">
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={todoapp}
                                width='100%'
                                height='100%'
                            />
                        </div>
        </TabPanel>
        <TabPanel className="tab_body" value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
