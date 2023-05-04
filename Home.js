import { View, Text, Image,  StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
       <Image style={styles.image} source={require("./assets/graphimg.png")}  /> 
       <Image style={styles.image} source={require("./assets/pie.png")}  /> 

    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        margin: 20,
        marginLeft:90,
      },

});

export default Home;