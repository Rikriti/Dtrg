
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import {Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


const App =()=> {
SplashScreen.hide();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/DTRGLOGO.png')}
              />
            ),
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
