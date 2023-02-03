import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CreateFAB from '../components/global/customPaperComps/CreateFAB'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from 'react-native-paper';
import CameraComp from '../components/global/hardwareUse/CameraComp';

export default function Home() {
  const [text, setText] = useState<string>();
  return (
    <View style={styles.mainContainer}>
      <CameraComp></CameraComp>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1
    }
})