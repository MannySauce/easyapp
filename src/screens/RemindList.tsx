import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ReminderCard from '../components/global/customPaperComps/ReminderCard';

export default function RemindList() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ReminderCard></ReminderCard>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    marginHorizontal:20
  }
})