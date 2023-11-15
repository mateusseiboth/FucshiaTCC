import * as React from 'react';
import { StyleSheet,Text, Image, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';


export default function Charmander() {

  const [flagImage, setflagImage] = useState(true);

  const changeImage = () => {
    setflagImage(!flagImage)    
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
            require('../../../assets/images/icons8-charmander-96OFF.png') :
            require('../../../assets/images/icons8-charmander-96ON.png')
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
  tinyLogo: {
      width: 100,
      height: 100
  }
});



