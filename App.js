/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";


const App =()=> {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="home" component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>


  );
}




export default App;
