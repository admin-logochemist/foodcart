import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./DashboardTabs.css" ;
import { Link, useHistory } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  function handleClick() {
    history.push("/addResturant");
  }
  function handleClicked() {
    history.push("/addfoodcart");
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Dashboard-Tabs">
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="Width"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Profile" {...a11yProps(1)} />
        <Tab label="Restaurants" {...a11yProps(2)} />
        <Tab label="Foodcart" {...a11yProps(3)} />
        <Tab label="Invite Users" {...a11yProps(4)} />
      </Tabs>
      <div style={{ backgroundColor: '#f8f8f8' }}>
        <TabPanel value={value} index={0}>
          <div >
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div classname="Dashboard-box">
                <h1 style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Dashboard</h1>
                <h2 style={{ fontWeight: 'bold' }}>Welcome to Dashboard</h2>
              </div>
              <div className="btn-one">
                <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2, marginLeft: 300 }} onClick={()=>{handleClicked()}}>Add FoodCart</button>
                <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2 }} onClick={()=>{handleClick()}}>Add Restaurents</button>
              </div>
            </div>
            <div style={{ backgroundColor: '#f8f8f8',display: 'flex', justifyContent: 'space-evenly' }}>
            {/* <div style={{  }}>
              <p style={{ fontWeight: 'bold', padding: 30 }}>Advance filters</p>
            </div> */}
            {/* <div>
            <form style={{ padding: 25 }}>
                  <label>
                    Date
                    <input type="text" name="name" />
                  </label>
                </form>
            </div> */}
            {/* <div>
            <form style={{ padding: 25 }}>
                  <label>
                    Type
                    <input type="text" name="name" />
                  </label>
                </form>
              </div> */}
            </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div style={{ backgroundColor: '#f8f8f8', width: '100%', height: '100%'}}>
            <h1>Your Profile</h1>
            
            <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
              <div style={{}}>
                <img style={{ borderRadius: '50%', height: 300 }} src={test1} />
              </div>
              <div style={{ padding: 10 }}>
                  <h1>Alex Wilson</h1>
                  <p style={{ padding: 10 }}>Email: Email@Email.com</p>
                  <p style={{ marginLeft: 12 }}>Phone: 123456713</p>
                  <p style={{ marginLeft: 12 }}>Address: USA, New York</p>
              </div>
            </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        These are the Restaurants
      </TabPanel>
      <TabPanel value={value} index={3}>
        This is a Food Cart
      </TabPanel>
      <TabPanel value={value} index={4}>
        You can invite User here
      </TabPanel>
      </div>
    </Box>
    </div>
  );
} 