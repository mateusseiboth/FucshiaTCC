import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View, StyleSheet, Animated, ActivityIndicator, Easing } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { criarTabela, recuperarDispositivo } from "../../utils/banco";
import { Color, FontFamily } from "../../../GlobalStyles";

export default function BemVindo() {
  const navigation = useNavigation();
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: 0.7,
      duration: 600,
      useNativeDriver: false,
    }).start();
    getDevices();
  }, []);

  async function getDevices() {
    try {
      criarTabela();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
      console.log("getDevices");
      const databaseDevice = await recuperarDispositivo();
      console.log(databaseDevice);
      if (databaseDevice.length > 0) {
        console.log("tem dispositivo");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'FucshiaHome' },
            ],
          })
        );
        navigation.navigate("FucshiaHome");
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Bem Vindo' },
            ],
          })
        );
        console.log("não tem dispositivo");
        // navigation.navigate("Bem Vindo");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.containerLogo}>
        <Animated.Image
          style={[homeStyle.tinyLogo, { opacity: opacityValue }]}
          resizeMode="contain"
          source={require("../../../assets/images/logo.png")}
        />
       <Typewriter />
      </View>

      <View style={[homeStyle.bolinha, homeStyle.bolinhaBaixo]} />
      <View style={homeStyle.containerTitle}>
        <ActivityIndicator size="large" color={Color.colorFuchsia}/>
      </View>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    flex: 1,
    top: 250,
  },
  containerTitle: {
    flex: 1,
    position: "absolute",
    bottom: 130,
  },
  containerButton: {
    flex: 0.5,
    width: 150,
    height: 150,
  },
  tinyLogo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  fucshia: {
    color: Color.colorFuchsia,
    fontFamily: FontFamily.montserratBold,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    opacity: 1,
    width: 1,
    overflow: "hidden",
  },
});



export function Typewriter() {
  const [text, setText] = useState("");
  const textRef = useRef("Fuchsia");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current <= textRef.current.length) {
        setText(textRef.current.substring(0, indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.typewriter}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  typewriter: {
    overflow: "hidden",
    letterSpacing: 0.15,
    marginHorizontal: "auto",
    whiteSpace: "nowrap",
    
  },
  text: {
    color: Color.colorFuchsia,
    fontFamily: FontFamily.montserratBold,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

