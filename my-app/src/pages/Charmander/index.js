import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';


export default function Charmander() {

  const [flagImage, setflagImage] = useState(true)

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
            require('./assets/icons8-charmander-96OFF.png') :
            require('./assets/icons8-charmander-96ON.png')
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