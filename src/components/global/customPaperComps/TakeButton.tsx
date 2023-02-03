import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';

const TakeButton = () => (
  <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({})