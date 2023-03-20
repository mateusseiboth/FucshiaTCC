import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";



export default function App() {

  const [flagImage, setflagImage] = useState(true)

  const changeImage = () => {
    setflagImage(!flagImage)
    console.log("meow")
  }

  useEffect(() => {
    //Animação ...      
  })

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/logo.png')}
        />
      </View>

      <View>
        <TouchableOpacity  onPress={changeImage}>
          <Image
            style={styles.tinyLogo}
            source={flagImage === true ?
              require('./assets/icons8-charmander-96OFF.png') :
              require('./assets/icons8-charmander-96ON.png')}           
          />
        </TouchableOpacity>

        <Text>
          {flagImage == true ? 'CharmanderOFF' : 'CharmanderON' }          
        </Text>



      </View>
    </KeyboardAvoidingView>
  );




}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
  tinyLogo: {
    width: 100,
    height: 100
  }
});