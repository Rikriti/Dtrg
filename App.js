import Login from './Login';
import Dashboard from './Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View, Alert, Text} from 'react-native';
import Drawernav from './Drawernav';
import {createDrawerNavigator} from '@react-navigation/drawer';

SplashScreen.hide();
const Stack = createNativeStackNavigator();


function SideDrawer () {
  return ( 
<Drawernav/>
  );
}

function Contact(){}
function Reports(){}
function Logout(){}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Drawernav}
        options={{
          headerShown: false,
        }}

      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
