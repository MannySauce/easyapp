import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { ComponentType, ElementType, ReactNode } from 'react'

export default function ScreenContainer(children: React.ReactNode) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})