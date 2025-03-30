import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Demo from './Demo'

export default function App() {
  console.log('hello') 
  return (
    <View style={{flex:1, padding: 10, justifyContent: 'center'}}>
      <HomeScreen />
    </View>
  )
}