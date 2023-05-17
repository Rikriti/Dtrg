
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home";
import {Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const App =()=> {
SplashScreen.hide();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
return (
  <NavigationContainer >
     <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          // headerTitle: () => (
          //   <Image
          //     source={require('./assets/DTRGLOGO.png')}
          //   />
          // ),
          headerShown:false,
        }}
      />
     <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerBackVisible:false,

          title: 'DG-Cloud',

          headerStyle: {
            backgroundColor: '#36a2eb',
            borderBottomColor: 'red',
            borderBottomWidth: 20,
          },
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
            fontFamily:'Roboto-Regular'
          },
          headerTintColor: 'white',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    {/* <Tab.Navigator>
    <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerBackVisible:false,

          title: 'DG-Cloud',

          headerStyle: {
            backgroundColor: '#36a2eb',
            borderBottomColor: 'red',
            borderBottomWidth: 20,
          },
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
            fontFamily:'Roboto-Regular'
          },
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator> */}
  </NavigationContainer>
  );
};

export default App;
