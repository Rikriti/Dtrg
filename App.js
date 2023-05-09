

import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DG-Cloud">
        <Stack.Screen name="DG-Cloud" component={Login} />
        <Stack.Screen name="Dashboard" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
