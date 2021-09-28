import * as React from 'react';
import {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./tabsstyle.css"
import ResturantInfo from './ResturantInfo';
import { db } from '../firebase';

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

export default function FullWidthTabs(item) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [resturant, setResturants] = useState([]);
  const getResturants=()=>{
    db.collection('resturant').onSnapshot(snapshot=>(
     setResturants(snapshot.docs.map(doc=>({
       data:doc.data()
     }
     ))) 
    ))
  };
  useEffect(() => {
    getResturants();
    
  }, [])
  const renderResturants = () => {
    if (resturant.length > 0) {
      console.log("resturant", resturant);
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return resturant.map((item, index) => {
        var detail = []
        console.log("ï", item)
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item) => {
          // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
          return (
  
            <ResturantInfo
              img={item.postImage}
              resname={item.resName}
              phone={item.phone}
              email={item.email}
              cusine={item.cusine}
            />
          );
        })
      })
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <div className="tabs">
    <Box sx={{ bgcolor: 'background.paper', width: '100%'}}>
      <AppBar position="static">
        <Tabs className="main-tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="Width"
          aria-label="full width tabs example"
          centered
        >
          <Tab className="labels" label="Food Trucks" {...a11yProps(0)} />
          <Tab className="labels" label="Big Chain Restaurants" {...a11yProps(1)} />
          <Tab className="labels" label="Local Restaurants" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="Tabpanel12">
        {renderResturants()}
         
         </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Big Chain Restaurants
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Local Restaurants
        </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
  );
}