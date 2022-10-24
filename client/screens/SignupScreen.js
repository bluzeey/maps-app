import { StyleSheet, View } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text h4>Sign up for Tracker</Text>
      <Input label="Email"/>
      <Input label="Password"/>
      <Button title='Sign Up'/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  
})