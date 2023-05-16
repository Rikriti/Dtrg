import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {FontFamily, Colors} from './assets/fonts/util/CommonStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');

  const submit = async () => {
    // return Alert.alert(email,password);
    if (
      username === 'admin' &&
      password === 'super@dmin@123' &&
      domain === 'admin'
    ) {
      Alert.alert('Sucessful Login');
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Username or Password is not correct');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <FontAwesome5 name={'user'} solid style={styles.textInputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#808080"
          value={username}
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesome5 name={'lock'} solid style={styles.textInputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry={visible}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity
          onPress={() => {
            setVisible(!visible);
            setShow(!show);
          }}>
          <FontAwesome5
            name={show === false ? 'eye' : 'eye-slash'}
            solid
            style={styles.textInputIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <FontAwesome5 name={'user-lock'} solid style={styles.textInputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Domain"
          placeholderTextColor="#808080"
          value={domain}
          onChangeText={domain => setDomain(domain)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => submit()}
        activeOpacity={0.8}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.afterLogin}>
        <View>
          <TouchableOpacity
           activeOpacity={0.8}>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
           activeOpacity={0.8}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Light',
  },
  inputView: {
    width: '60%',
    height: 45,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#36a2eb',
    flexDirection: 'row',
  },
  TextInput: {
    height: 36,
    flex: 1,
    padding: 10,
  },
  textInputIcon: {
    padding: 10,
  },
  afterLogin: {
    marginTop: 20,
    flexDirection: 'row',
  },
  loginBtn: {
    width: '60%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#36a2eb',
  },
  loginText: {
    color: '#fff',
  },
  forgot_button: {
    color: '#36a2eb',
  },
  register: {
    color: '#36a2eb',
    marginLeft: 15,
  },
});

export default Login;
