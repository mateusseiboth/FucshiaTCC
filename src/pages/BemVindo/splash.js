import * as React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { criarTabela, recuperarDispositivo } from "../../utils/banco";

export default function BemVindo() {
  const navigation = useNavigation();

  async function getDevices() {
    try {
      criarTabela();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      console.log("getDevices");
      const databaseDevice = await recuperarDispositivo();
      console.log(databaseDevice);
      if (databaseDevice.length > 0) {
        console.log("tem dispositivo");
        navigation.navigate("FucshiaHome");
      } else {
        console.log("não tem dispositivo");
        navigation.navigate("Bem Vindo");
      }
    } catch (error) {
      console.log(error);
    }
  }

  getDevices();
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.containerLogo}>
        <Image
          style={homeStyle.tinyLogo}
          resizeMode="contain"
          source={require("../../../assets/logoTipoSVGMasPNG.png")}
        />
        <Text style={[homeStyle.fucshia, homeStyle.title]}>Fuchsia</Text>
      </View>

      <View style={[homeStyle.bolinha, homeStyle.bolinhaBaixo]} />
      <View style={homeStyle.containerTitle}>
        <Text
          style={{ fontWeight: "bold", alignSelf: "center", color: "#FFFFFF" }}
        >
          Trazendo inovação para sua casa
        </Text>
      </View>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    flex: 1,
    top: 0,
  },
  containerTitle: {
    flex: 1,
  },
  containerButton: {
    flex: 0.5,
    width: 150,
    height: 150,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  fucshia: {
    color: "#FF00FF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
