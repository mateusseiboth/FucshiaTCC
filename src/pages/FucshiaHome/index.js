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
            resizeMode="contain"
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.topBarRight}>
          <Xtudo isOpen={isMenuOpen} style={{ zIndex: 999 }} />
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.itens, { backgroundColor: "#63D5E2" }]}
          onPress={() => {
            handleRoute("lamp");
          }}
        >
          <View>
            <Text style={[styles.title]}>
              Luzes
              <Icon
                style={styles.icons}
                name="lightbulb-on-outline"
                size={60}
                color="#408B93"
              />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itens, { backgroundColor: "#EB865E" }]}
          onPress={() => {
            handleRoute("lamp");
          }}
        >
          <View>
            <Text style={[styles.title]}>
              Portões
              <Icon
                style={styles.icons}
                name="door-closed"
                size={60}
                color="#99573D"
              />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itens, { backgroundColor: "#D073D0" }]}
          onPress={() => {
            handleRoute("lamp");
          }}
        >
          <View>
            <Text style={[styles.title]}>
              Câmeras
              <Icon
                style={styles.icons}
                name="video-outline"
                size={60}
                color="#874B87"
              />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itens, { backgroundColor: "#9AD262" }]}
          onPress={() => {
            handleRoute("lamp");
          }}
        >
          <View>
            <Text style={[styles.title]}>
              Aparelhos
              <Icon
                style={styles.icons}
                name="devices"
                size={60}
                color="#648940"
              />
            </Text>
            <Text style={[styles.subTitle]}>Alguma quantidade instalada</Text>
          </View>
        </TouchableOpacity>
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
  title: {
    fontSize: 32,
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 12,
    alignSelf: "center",
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
    alignItems: "flex-end",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    opacity: 0.7,
  },
});
