import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RemindList({route, navigation}) {
    const {id, img, descr, time} = route.params;
    console.log("route.params")
  return (
    <View>
      <Text>RemindList</Text>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})