import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Save Reminder' onPress={()=>navigation.navigate('RemindList')}/>
    </View>
  )
}

const styles = StyleSheet.create({})