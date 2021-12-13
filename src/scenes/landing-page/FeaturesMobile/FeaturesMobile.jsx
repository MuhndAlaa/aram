import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import one from "../../../images/one.jpg";
import two from "../../../images/two.jpg";
import three from "../../../images/three.jpg";
import five from "../../../images/five.jpg";

import ReactPlayer from "react-player";
import video1 from "../../../video/dashbarod1.mp4";


import "./FeaturesMobile.scss";
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
        <Box sx={{ p: 4 }}>
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FeaturesMobile() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      className="todo_bar mt-3 features-container"
      sx={{ bgcolor: "background.paper", width: 1000 }}
    >
      <div className="features_mobile" id="features_mobile">
        <h3 className="title">features</h3>
        <h5 className="sub-title">What we Support</h5>
      </div>
      <AppBar position="static" sx={{ width: 600 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className="tab_title" label="about" {...a11yProps(0)} />
          <Tab className="tab_title" label="Demo" {...a11yProps(1)} />
          <Tab className="tab_title" label="Item Three" {...a11yProps(2)} />
          <Tab className="tab_title" label="Item four" {...a11yProps(3)} />
          <Tab className="tab_title" label="Item five" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* <TabPanel className="tab_body" value={value} index={0} dir={theme.direction}> */}

        <div>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className="player-wrapper col-lg-12 col-md-12 float-end"
                data-aos="fade-left"
              >
                <ReactPlayer
                  playing={true}
                  muted
                  loop
                  className="react-player"
                  url={video1}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* </TabPanel> */}
        {/* <TabPanel className="tab_body" value={value} index={1} dir={theme.direction}> */}

        <figure>
          <img className="w-100" src={one} alt="Second slide" />
        </figure>

        {/* </TabPanel> */}
        <TabPanel
          className="tab_body"
          value={value}
          index={2}
          dir={theme.direction}
        >
          <figure>
            <img className="w-100" src={two} alt="Second slide" />
          </figure>{" "}
        </TabPanel>

        <TabPanel
          className="tab_body"
          value={value}
          index={3}
          dir={theme.direction}
        >
          <figure>
            <img className="w-100" src={three} alt="Second slide" />
          </figure>{" "}
        </TabPanel>

        <TabPanel
          className="tab_body"
          value={value}
          index={4}
          dir={theme.direction}
        >
          <figure>
            <img className="w-100" src={five} alt="Second slide" />
          </figure>{" "}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
