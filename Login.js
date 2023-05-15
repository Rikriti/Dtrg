<<<<<<< HEAD


=======
>>>>>>> 1ed236befa1c84f6d7cc7efa7660ac349f63ca2e
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

 import { SOAPConnection } from "./SOAPConnection";


const Login =({navigation})=>{
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState("");

<<<<<<< HEAD
  const submit = async () =>{
    // return Alert.alert(email,password);
    if (username==="admin" && password==="super@dmin@123" && domain==="admin"){
        Alert.alert('Sucessful Login');
        navigation.navigate("Dashboard");
    }else{
        Alert.alert('Username and Password is not correct');
=======
  const submit = async (username, password, domain) =>{

    try{
      var resp = await SOAPConnection(username, password, domain) ;
      console.log(resp);
    }catch(error){
      console.log(error);
>>>>>>> 1ed236befa1c84f6d7cc7efa7660ac349f63ca2e
    }
     
      
    // if (username==="admin" && password==="admin123" && domain==="admin"){
    //     Alert.alert('Sucessful Login');
    //     navigation.navigate("Dashboard");
    // }else{
    //     Alert.alert('Username or Password is not correct');
    // }
  }

  return (
    <View style={styles.container}>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        placeholderTextColor="#808080"
        value={username}
        onChangeText={(username) => setUsername(username)}
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
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Domain"
        placeholderTextColor="#808080"
        value={domain}
        onChangeText={(domain) => setDomain(domain)}
      /> 
    </View> 
<<<<<<< HEAD

=======
>>>>>>> 1ed236befa1c84f6d7cc7efa7660ac349f63ca2e
    <TouchableOpacity style={styles.loginBtn} onPress={() => submit() }>
        <Text style={styles.loginText}>LOGIN</Text>  
      </TouchableOpacity> 
      <TouchableOpacity>
      <View style={styles.row}>
      <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </View>
      </TouchableOpacity> 

      {/* <View style={styles.footer}>
      <Text style={styles.powered}>Powered By</Text> 
      <Image style={styles.image} source={require("./assets/DTRGLOGO.png")}  /> 
      </View> */}
    </View> 

    
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex:1,
    backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
  },
  inputView: {
    width: "60%",
    height: 45,
    marginBottom: 20,
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
  },
  footer:{
marginTop:50,
flexDirection:"row",
letterSpacing:10,
  },

});

export default Login;
