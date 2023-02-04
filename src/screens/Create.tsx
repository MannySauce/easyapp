import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from 'react-native-paper';
import CameraComp from '../components/global/hardwareUse/CameraComp';

const Create = () => {
  const [text, setText] = useState<string>();
  const [photo, setPhoto] = useState<boolean>(false);

  const cancelCamera = () => {
    setPhoto(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.createContainer}>
          { !photo ? 
          (
            <View style={styles.photoContainer}>
              <TouchableOpacity onPress={()=>setPhoto(true)} activeOpacity={0.7} style={styles.touchablePhotoContainer}>
                <Image source={require('../../assets/imgs/Icons/createCam.png')} style={styles.img}/>
                <Text style={{color:'grey', fontSize:10}}>Tomar foto para recordar mejor</Text>
              </TouchableOpacity>
            </View>
          )
          : (<CameraComp cancelCamera={cancelCamera}></CameraComp>) }
          <TextInput
            mode='outlined'
            outlineColor={'grey'}
            outlineStyle={{borderWidth:3}}
            style={{flex:1}}
            placeholder='Recordarme de... /En 10 minutos, horas, dias'
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      backgroundColor:' #72555555'
    },
    createContainer: {
      flex:1
    },
    photoContainer: {
      flex:1,
      backgroundColor:'lightblue',
    },
    touchablePhotoContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    img: {
      height:'40%',
      width: '40%',
    }
});

export default Create;