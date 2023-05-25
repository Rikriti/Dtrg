import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Home , AccountUser} from './Dashboard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'home'} solid color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AccountUser"
        component={AccountUser}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'user'} light color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;