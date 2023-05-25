import Login from './Login';
import Dashboard from './Dashboard';
import Charts from './Charts';
import Contact from './Contact';
import Reports from './Reports';
import Logout from './Logout'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View, Alert, Text} from 'react-native';



SplashScreen.hide();
const Stack = createNativeStackNavigator();


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
        component={Dashboard}
        options={{
          headerTitle: () => (
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                activeOpacity={0.6}
              >
                <FontAwesome5 name={'bars'} regular style={{fontSize: 20}} color={'#1586d1'} />
              </TouchableOpacity>
              <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, top:-3, color:'#1586d1'}}>DG-Cloud</Text>
            </View>
          ),

          headerBackVisible: false,
        }}
      />
         <Stack.Screen  
         name="Charts"
        component={Charts}
          options={
            {
              title:'Account'
            }
          }
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
