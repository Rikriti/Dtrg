import { View, Text } from 'react-native'
import React from 'react'

function AccountUser({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Our Story</Text>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={{padding: 10, marginBottom: 10, marginTop: 10}}>
        <Text>Go to Conference</Text>
      </Pressable>
    </View>
  );
}

