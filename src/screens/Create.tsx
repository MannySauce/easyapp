import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from 'react-native-paper';
import CameraComp from '../components/global/hardwareUse/CameraComp';
import { useNavigation } from '@react-navigation/core'
import { StackParamsList } from '../routes/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

const Create = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

  const [text, setText] = useState<string>();
  const [time, setTime] = useState<string>();
  const [photo, setPhoto] = useState<boolean>(false);

  const timeMap = [
    {
      unit: "seconds",
      reg: [
        "segundos",
        "seconds"
      ],
      defined: false
    },
    {
      unit: "minutes",
      reg: [
        "minutos",
        "minutes"
      ],
      defined: false
    },
    {
      unit: "hours",
      reg: [
        "horas",
        "hours"
      ],
      defined: false
    },
    {
      unit: "days",
      reg: [
        "dias",
        "days"
      ],
      defined: false
    },
    {
      unit: "weeks",
      reg: [
        "semanas",
        "weeks"
      ],
      defined: false
    },
    {
      unit: "months",
      reg: [
        "meses",
        "months"
      ],
      defined: false
    },
    {
      unit: "years",
      reg: [
        "años",
        "years"
      ],
      defined: false
    }
  ];
  
  const handleCreate = () => {
    if(text !== null){
      Keyboard.dismiss()
      navigation.navigate('RemindList')
    }
  };

  const cancelCamera = () => {
    setPhoto(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Recuerda Mejor</Text>
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
            multiline
            outlineColor={'grey'}
            outlineStyle={{borderWidth:3}}
            style={{flex:1, height:100}}
            placeholder='Recordarme de... /En 10 minutos, horas, dias'
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
      </TouchableWithoutFeedback>
          <Button onPress={handleCreate} style={{backgroundColor:'blue'}}> <Text style={{color:'white'}}>Listo!</Text></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      backgroundColor:' #72555555',
      marginHorizontal:20
    },
    createContainer: {
      flex:1
    },
    photoContainer: {
      flex:1,
      borderRadius:20,
      backgroundColor:'lightblue',
    },
    touchablePhotoContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    img: {
      height:'25%',
      width: '25%',
    }
});

export default Create;