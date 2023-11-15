import * as React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import FuchsiaButton from "../../components/FucshiaButton";
import { useNavigation } from "@react-navigation/native";
import { recuperarDispositivo } from "../../utils/banco";
import { Color } from "../../../GlobalStyles";

export default function BemVindo() {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [tryAgain, setTryAgain] = React.useState(false);

  async function getDevices() {
    setLoading(true);
    const databaseDevice = await recuperarDispositivo();
    console.log(databaseDevice);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    await getGPIO(databaseDevice);
    setLoading(false);
  }

  React.useEffect(() => {
    getDevices();
  }, [tryAgain]);

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleCommand(route) {
    console.log(route);
  }

  return (
    <ImageBackground
      source={require("../../../assets/bolinhas-fundo.jpg")}
      style={homeStyle.backgroundImage}
    >
      <View style={homeStyle.container}>
        <View style={homeStyle.containerLogo}>
          <Image
            style={homeStyle.tinyLogo}
            resizeMode="contain"
            source={require("../../../assets/logoTipoSVGMasPNG.png")}
          />
        </View>
        <Text style={[homeStyle.fucshia, homeStyle.title]}>Fuchsia</Text>

        <View style={[homeStyle.bolinha, homeStyle.bolinhaBaixo]} />
        <View style={homeStyle.containerTitle}>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              color: Color.colorGray_100,
              fontSize: 18,
            }}
          >
            Bem vindo ao
            <Text style={[homeStyle.fucshia]}> Fucshia Home Assistant</Text>
          </Text>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
                color: Color.colorGray_100,
                fontSize: 18,
                marginHorizontal: 20,
                paddingTop: 20,
                textAlign: "center"
              }}
            >
              Deixe me guiá-lo em sua primeira configuração.
            </Text>
          </View>
        </View>

        <View style={homeStyle.containerButton}>
          <FuchsiaButton
            text="CONTINUAR"
            onPress={() => handleRoute("Setup1")}
            type="primary"
            disabled={false}
          />
          <View style={{ marginBottom: 15 }} />
          <FuchsiaButton
            text="PULAR"
            onPress={() => handleCommand("Mandei parar")}
            type="secondary"
            disabled={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    marginTop: 50,
    opacity: 0.7,
    //borderWidth: 2,
    //borderColor: Color.colorCadetblue,
  },
  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  containerButton: {
    marginBottom: 100,
    // borderWidth: 2,
    // borderColor: Color.colorCadetblue,
  },
  tinyLogo: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  fucshia: {
    color: Color.colorFuchsia,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  // Estilo para a imagem de fundo
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch", // ou "contain" para ajustar a imagem ao invés de cobrir
    justifyContent: "center",
  },
});
