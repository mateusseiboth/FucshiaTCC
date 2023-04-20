import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function FucshiaHome() {
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
          <Text style={{ color: 'white' }}>Aqui vai o menu Xtudo</Text>
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
    justifyContent: 'center'
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

  },
  topBar: {
    backgroundColor: '#000000',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topBarLeft: {
    flex: 1,
    alignItems: 'center',
  },
  topBarRight: {
    width: 70,
    alignItems: 'flex-end',
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});