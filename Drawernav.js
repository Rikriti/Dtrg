
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './Contact';
import Reports from './Reports';
import Logout from './Logout'



const Drawernav = () => {
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Reports" component={Reports} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Drawernav

