import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Save Reminder' onPress={()=>navigation.navigate('RemindList', {id:'123', img: "lolsito.png", descr: "funky reminder", time: 23})}/>
    </View>
  )
}

const styles = StyleSheet.create({})