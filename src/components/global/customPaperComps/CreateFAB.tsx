import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper';

export default function CreateFAB() {
  return (
    <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'red',
    borderRadius:400
  }
})