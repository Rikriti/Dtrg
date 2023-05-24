import React from 'react';
import {Pressable, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './Contact';
import Reports from './Reports';
import Charts from './Charts';

function Home() {
  return (
    <View style={styles.containerHome}>
      <TouchableOpacity>
        <Charts />
      </TouchableOpacity>
    </View>
  );
}

function AccountUser() {
  return (
    <View style={styles.containerAcc}>
      <View style={styles.card}>
      <View style={styles.topInfo}>
      <TouchableOpacity activeOpacity={0.8}>
          <FontAwesome5
            name={'user-circle'}
            solid
            style={styles.iconImage}
            size={78}
          />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.infoText}>rikriti koirala</Text>
          <Text>admin</Text>
        </View>
      </View> 
        <View style={styles.list}>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name={'location-arrow'}
              solid
              style={styles.textInputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Gokarneshwor-15"
              placeholderTextColor="#808080"
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'phone'} solid style={styles.textInputIcon} />
            <TextInput
              style={styles.input}
              placeholder="987609876"
              placeholderTextColor="#808080"
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name={'envelope'}
              solid
              style={styles.textInputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="abc@gmail.com"
              placeholderTextColor="#808080"
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name={'user-tag'}
              regular
              style={styles.textInputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Admin"
              placeholderTextColor="#808080"
              editable={false}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <FontAwesome5 name={'edit'} solid style={styles.textEdit} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Dashboard() {
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

const styles = {
  containerAcc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#e8f4fd'
  },
  card: {
    top: 0,
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: '#171717',
    padding: 20,
    shadowOpacity: 1.0,
    borderWidth: 2,
    borderColor: '#8bcaf4',
    borderRadius: 10,
  },
  topInfo:{
borderBottomWidth:1,
borderBottomColor:'#36a2eb'
  },
  iconImage: {
    color: '#8bcaf4',
    marginLeft: 10,
    top: 10,
  },
  info: {
    marginLeft: 180,
    top: -60,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '80%',
    marginLeft: 10,
  },
  input: {
    height: 40,
    color: '#333',
    paddingLeft: 10,
  },
  textInputIcon: {
    color: '#36a2eb',
    paddingLeft: 10,
    top: 12,
  },
  list: {
    padding: 10,
  },
  textEdit: {
    color: '#36a2eb',
    marginLeft: 270,
  },
};

export default Dashboard;
