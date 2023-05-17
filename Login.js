import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import {FontFamily, Colors} from './assets/fonts/util/CommonStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Login = ({navigation}) => {
//   const [show, setShow] = React.useState(false);
//   const [visible, setVisible] = React.useState(true);

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [domain, setDomain] = useState('');

//   const submit = async () => {
//     // return Alert.alert(email,password);
//     if (
//       username === 'admin' &&
//       password === '123' &&
//       domain === 'admin'
//     ) {
//       Alert.alert('Sucessful Login');
//       navigation.navigate('Dashboard');
//     } else {
//       Alert.alert('Username or Password is not correct');
//     }
//   };

//   return (
//     <View style={styles.container}>
//     <Image style={styles.image} source={require("./assets/DTRGLOGO.png")} />
//       <View style={styles.inputView}>
//         <FontAwesome5 name={'user'} solid style={styles.textInputIcon} />
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Username"
//           placeholderTextColor="#808080"
//           value={username}
//           onChangeText={username => setUsername(username)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <FontAwesome5 name={'lock'} solid style={styles.textInputIcon} />
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#808080"
//           secureTextEntry={visible}
//           value={password}
//           onChangeText={password => setPassword(password)}
//         />
//         <TouchableOpacity
//           onPress={() => {
//             setVisible(!visible);
//             setShow(!show);
//           }}>
//           <FontAwesome5
//             name={show === false ? 'eye' : 'eye-slash'}
//             solid
//             style={styles.textInputIcon}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.inputView}>
//         <FontAwesome5 name={'user-lock'} solid style={styles.textInputIcon} />
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Domain"
//           placeholderTextColor="#808080"
//           value={domain}
//           onChangeText={domain => setDomain(domain)}
//         />
//       </View>

//       <TouchableOpacity
//         style={styles.loginBtn}
//         onPress={() => submit()}
//         activeOpacity={0.8}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>

//       <View style={styles.afterLogin}>
//         <View>
//           <TouchableOpacity
//            activeOpacity={0.8}>
//             <Text style={styles.forgot_button}>Forgot Password?</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TouchableOpacity
//            activeOpacity={0.8}>
//             <Text style={styles.register}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: 'Montserrat-Light',
//   },
//   image: {
//     position: 'absolute',
//   },
//   inputView: {
//     width: '60%',
//     height: 45,
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#36a2eb',
//     flexDirection: 'row',
//   },
//   TextInput: {
//     height: 36,
//     flex: 1,
//     padding: 10,
//   },
//   textInputIcon: {
//     padding: 10,
//   },
//   afterLogin: {
//     marginTop: 20,
//     flexDirection: 'row',
//   },
//   loginBtn: {
//     width: '60%',
//     borderRadius: 25,
//     height: 45,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     backgroundColor: '#36a2eb',
//   },
//   loginText: {
//     color: '#fff',
//   },
//   forgot_button: {
//     color: '#36a2eb',
//   },
//   register: {
//     color: '#36a2eb',
//     marginLeft: 15,
//   },
// });

const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');

  const submit = async () => {
    // return Alert.alert(email,password);
    if (username === 'admin' && password === '123' && domain === 'admin') {
      Alert.alert('Sucessful Login');
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Username or Password is not correct');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/background3.png')}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/DTRGLOGO.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        {/* <Text style={styles.title}>Login</Text> */}
        <View style={styles.card }>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'user'} solid style={styles.textInputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#808080"
              value={username}
              onChangeText={username => setUsername(username)}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'lock'} solid style={styles.textInputIcon} />
            <TextInput
              style={styles.input}
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
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name={'user-lock'}
              solid
              style={styles.textInputIcon}
            />
            <TextInput
              style={styles.input}
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
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.register}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
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
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    padding: 30,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#36a2eb',
    flexDirection: 'row',
    width: '80%',
  },
  input: {
    height: 40,
    color: '#333',
    paddingLeft: 10,
  },
  textInputIcon: {
    color: '#333',
    paddingLeft: 10,
    top:12,
  },
  eyeIcon: {
    color: '#333',
    paddingLeft: 96,
    top:12,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};

export default Login;
