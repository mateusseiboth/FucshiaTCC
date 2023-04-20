import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Xtudo from '../../components/menuXtudo/menuXtudo'
import { useState } from 'react';
export default function FucshiaHome() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function abrirXTudo() {
    setIsMenuOpen(!isMenuOpen);
  }



  return (
    <View>
      <View style={styles.topBar} elevation={5}>
        <View style={styles.topBarLeft} >
          <Image
            style={styles.tinyLogo}
            resizeMode="contain"
            source={require("../../../assets/logoTipoSVGMasPNG.png")}
          />
        </View>
        <View style={styles.topBarRight}>
          <Xtudo isOpen={isMenuOpen} style={{ zIndex: 999 }} />
        </View>
      </View>

      <View style={styles.container}>
     
        <View style={[styles.itens, { backgroundColor: '#63D5E2' }]}>
          
          <Text style={[styles.title]}>Luzes 
          <Icon style={styles.icons}
              name="lamp-outline"
              size={60}
              color="#408B93"
            />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
        </View>
        
        <View style={[styles.itens, { backgroundColor: '#EB865E' }]}>
        <Text style={[styles.title]}>Portões
          <Icon style={styles.icons}
              name="door-closed"
              size={60}
              color="#99573D"
            />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
        </View>

        <View style={[styles.itens, { backgroundColor: '#D073D0' }]}>
        <Text style={[styles.title]}>Câmeras
          <Icon style={styles.icons}
              name="video-outline"
              size={60}
              color="#874B87"
            />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
        </View>
        
        <View style={[styles.itens, { backgroundColor: '#9AD262' }]}>
        <Text style={[styles.title]}>Aparelhos
          <Icon style={styles.icons}
              name="devices"
              size={60}
              color="#648940"
            />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itens: {
    marginTop: 30,
    columnGap: 15,
    width: "60%",
    height: "15%",
    justifyContent: 'center',
    zIndex: 2,
  },
  icons: {
    alignSelf: 'center',

  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 12,
    alignSelf: 'center',
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#1B1B1B",
    width: "100%",
    height: "100%",
    alignItems: 'center',
    zIndex: 3,

  },
  topBar: {
    backgroundColor: '#000000',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 4,
  },
  topBarLeft: {
    flex: 1,
    alignItems: 'center',
  },
  topBarRight: {
   
    alignItems: 'flex-end',
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});