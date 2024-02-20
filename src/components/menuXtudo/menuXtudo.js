import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { limparDados } from "../../utils/banco";

export default function HamburgerMenu() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleRoute(route) {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon style={styles.icons} name="menu" size={32} color="#FF00FF" />
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#9AD262" }]}
            onPress={() => {
              limparDados();
              ToastAndroid.show("App resetado", ToastAndroid.SHORT);
              handleRoute("Bem Vindo");
            }}
          >
            <View style={[styles.itens]}>
              <Text style={[styles.title, {marginRight: 5}]}>
                Resetar configuração
              </Text>
              <Text>
              <Icon
                  style={[styles.gearIcon]}
                  name="cog-outline"
                  size={30}
                  color="#648940"
                />
              </Text>
             
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  menu: {
    left: 0,
    alignSelf: "center",
    position: "absolute",
    top: 70,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
    width: 250,
    height: 75,
    fontSize: 18,
    borderRadius: 5,
  },
  itens: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    alignSelf: "center",
  },
  gearIcon: {
   marginLeft: "5px",
  },
  title: {
    fontSize: 16,
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
});
