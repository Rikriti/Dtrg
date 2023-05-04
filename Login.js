/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";





const Login =({navigation})=>{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () =>{
    // return Alert.alert(email,password);
    if (email==="admin" && password==="admin123"){
        Alert.alert('Sucessful Login');
        navigation.navigate("home");
    }else{
        Alert.alert('Username and Password is not correct');
    }
  }

  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("./assets/DTRGLOGO.png")}  /> 
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={(username) => setEmail(username)}
      /> 
    </View> 
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#808080"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      /> 
    </View> 

    <TouchableOpacity style={styles.loginBtn} onPress={() => submit() }>
        <Text style={styles.loginText}>LOGIN</Text>  
      </TouchableOpacity> 
      <TouchableOpacity>
      <View style={styles.row}>
      <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </View>
      </TouchableOpacity> 
    </View> 
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth :1,
    borderBottomColor: '#000',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  row: {
    marginTop:20,
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#36a2eb",
  },
  loginText:{
    color:"white",
  },
  fontawesome:{
    color:"black"
  }
});

export default Login;
