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
          source={require('./assets/logoBaixaQualidade.png')}
        />
      </View>
      <View >
        <Text style={[styles.fucshia, styles.title]} >Fuchsia</Text>    
      </View>
      
      <View>
        <Text>
          Bem vindo ao
          <Text style={[styles.fucshia]}> Fucshia Home Assistant </Text>
          ! Deixe me guiá-lo em sua primeira configuração.
        </Text>
      </View>   
      {/* <View>
        <TouchableOpacity  onPress={changeImage}>
          <Image
            style={styles.tinyLogo}
            source={flagImage === true ?
              require('./assets/icons8-charmander-96ON.png')}           
              require('./assets/icons8-charmander-96OFF.png') :
          />
        </TouchableOpacity>

        <Text>
          {flagImage == true ? 'CharmanderOFF' : 'CharmanderON' }          
        </Text>
      </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 32,
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
  },
  fucshia: {
    color: "#FF00FF",
    fontWeight: "bold" 
  },
  title: {
    fontSize: 32
  } 
});