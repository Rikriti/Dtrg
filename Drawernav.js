
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './Contact';
import Reports from './Reports';
import Logout from './Logout';
import TabNav from './TabNav';


const Drawernav = () => {
    const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="DG-Cloud" component= {TabNav} />
        <Drawer.Screen name="Contact" component={TabNav} />
        <Drawer.Screen name="Reports" component={Reports} />
      </Drawer.Navigator>
  )
}

export default Drawernav;

