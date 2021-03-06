import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import Tabs from '@material-ui/core/Tabs';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Cards from '../../../containers/Cards/Cards'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
}));

function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered> 
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Tabs>
        </AppBar>
        <TabPanel style={{
          backgroundColor:'#53dbf3'
        }} value="1"><Cards /></TabPanel>
        <TabPanel value="2"><Cards /></TabPanel>
        <TabPanel value="3"><Cards /></TabPanel>
      </TabContext>
    </div>
  );
}

export default NavigationBar