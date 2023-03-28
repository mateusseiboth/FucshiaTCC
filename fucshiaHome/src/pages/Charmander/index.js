import * as React from 'react';
import { StyleSheet,Text, Image, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';


export default function Charmander() {

  const [flagImage, setflagImage] = useState(true);

  const changeImage = () => {
    setflagImage(!flagImage)
    console.log("meow")
  }

  useEffect(() => {
    //Animação ...      
  })

  return (
    <View>
      <TouchableOpacity onPress={changeImage}>
        <Image
          style={styles.tinyLogo}
          source={flagImage === true ?
            require('../../../assets/icons8-charmander-96OFF.png') :
            require('../../../assets/icons8-charmander-96ON.png')
          }
        />
      </TouchableOpacity>

      <Text>
        {flagImage == true ? 'CharmanderOFF' : 'CharmanderON'}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
  containerLogo: {
      flex: 1,
  },
  containerTitle: {
      flex: 0.5

  },
  containerButton: {
      flex: 2
  },
  tinyLogo: {
      width: 230,
      height: 230
  },
  fucshia: {
      color: "#FF00FF",
      fontWeight: "bold"
  },
  title: {
      fontSize: 32
  }  
});



