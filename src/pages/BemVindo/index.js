import * as React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { recuperarDispositivo } from "../../utils/banco";
import { Color, FontFamily } from "../../../GlobalStyles";
import MainButton from "../../components/mainButton";

const backgroundSource = require("../../../assets/images/background.jpg");
const logoSource = require("../../../assets/images/logo.png");

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
    <ImageBackground source={backgroundSource} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.tinyLogo}
            resizeMode="contain"
            source={logoSource}
          />
        </View>
        <Text style={styles.title}>Fuchsia</Text>

        <View style={[styles.bolinha, styles.bolinhaBaixo]} />
        <View style={styles.containerTitle}>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              color: Color.colorGray_100,
              fontSize: 18,
            }}
          >
            Bem vindo ao
            <Text style={[styles.textColor]}> Fucshia Home Assistant!</Text>
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
                textAlign: "center",
              }}
            >
              Deixe me guiá-lo em sua primeira configuração.
            </Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <MainButton
            text="CONTINUAR"
            onPress={() => handleRoute("Setup1")}
            type="primary"
            disabled={false}
          />
          <View style={{ marginBottom: 15 }} />
          <MainButton
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    marginTop: 100,
    opacity: 0.7,
  },
  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  containerButton: {
    marginBottom: 100,
  },
  tinyLogo: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  title: {
    color: Color.colorFuchsia,
    fontFamily: FontFamily.montserratBold,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  textColor: {
    color: Color.colorFuchsia,
  },
});
