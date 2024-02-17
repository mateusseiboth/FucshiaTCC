import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Xtudo from "../../components/menuXtudo/menuXtudo";
import Flutuante from "../../components/menuFlutuante/menuFlutuante";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../../GlobalStyles";

export default function FucshiaHome() {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function abrirXTudo() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleRoute(route) {
    navigation.navigate(route);
  }

  return (
    <View>
      <View style={styles.topBar} elevation={5}>
        <View style={styles.topBarRight}>
          <Xtudo isOpen={isMenuOpen} style={{ zIndex: 999 }} />
        </View>
        <View style={styles.topBarLeft}>
          <Image
            style={styles.tinyLogo}
            resizeMode="center"
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.topBarRight}  >
          {/* <Xtudo isOpen={isMenuOpen} style={{ zIndex: 999 }} /> */}
        </View>
      </View>

      <View style={styles.container}>
        <ButtonHome callBack={handleRoute} title="Luzes" route="lamp" icon="lightbulb-on-outline" color="#408B93" bgColor="#63D5E2" />
        <ButtonHome callBack={handleRoute} title="Portões" route="portoes" icon="door-closed" color="#99573D" bgColor="#EB865E" />
        <ButtonHome callBack={handleRoute} title="Câmeras" route="lamp" icon="video-outline" color="#874B87" bgColor="#D073D0" />
        <ButtonHome callBack={handleRoute} title="Aparelhos" route="lamp" icon="devices" color="#648940" bgColor="#9AD262" />
        
        <View
          style={{
            marginTop: 96,
            width: "60%",
            height: "13%",
            justifyContent: "center",
            zIndex: 4,
            bottom: 0,
          }}
        >
          <Flutuante />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itens: {
    marginTop: 20,
    columnGap: 15,
    borderRadius: 10,
    width: "80%",
    height: "13%",
    justifyContent: "center",
    zIndex: 2,
  },
  itensBackground: {
    marginTop: 20,
    columnGap: 15,
    borderRadius: 10,
    width: "60%",
    height: "20%",
    justifyContent: "center",
    zIndex: 1,
  },
  icons: {
    alignSelf: "center",
  },
  buttons: {
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 50,
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 60,
  },
  subTitle: {
    marginLeft: 65,
    fontSize: 14,
    color: "black",
    opacity: 0.4,
    fontWeight: "bold",
    // alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
  },
  container: {
    flexDirection: "column",
    backgroundColor: Color.colorWhitesmoke_200,
    width: "100%",
    height: "100%",
    alignItems: "center",
    zIndex: 3,
  },
  topBar: {
    backgroundColor: Color.colorWhite,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOpacity: 0.5,
    zIndex: 4,
  },
  topBarLeft: {
    flex: 1,
    alignItems: "center",
  },
  topBarRight: {
    flex: 1,
    alignItems: "flex-start",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    opacity: 0.7,
    // marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
  },
});

const ButtonHome = (props) => {
  return (
    <TouchableOpacity
      style={[styles.itens, { backgroundColor: props.bgColor}]}
      onPress={() => {
        props.callBack(props.route);
      }}
    >
      <View>
        <View style={[styles.buttons]}>
          <Text style={[styles.title]}>
            {props.title}
          </Text>
          <Text>
            <Icon
              style={styles.icons}
              name={props.icon}
              size={60}
              color={props.color}
            />
          </Text>
        </View>
        <Text style={[styles.subTitle]}>[ 00 ] Instalado(s)</Text>
      </View>
    </TouchableOpacity>
  )

}
