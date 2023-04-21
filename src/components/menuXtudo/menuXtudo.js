import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

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
        <Icon style={styles.icons}
          name="menu"
          size={32}
          color="#FF00FF"
        />
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.menuItem]} onPress={() => {ToastAndroid.show("Não implementado", ToastAndroid.SHORT)}}>
              <View style={[styles.itens, { backgroundColor: '#63D5E2' }]}>
                <Text style={[styles.title]}>Placas
                  <Icon style={styles.icons}
                    name="plus-circle-outline"
                    size={30}
                    color="#408B93"
                  />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#EB865E'}]} onPress={() => {ToastAndroid.show("Não implementado", ToastAndroid.SHORT)}}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Senhas
                <Icon style={styles.icons}
              name="key-outline"
              size={30}
              color="#99573D"
            />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#D073D0'}]} onPress={() => {ToastAndroid.show("Não implementado", ToastAndroid.SHORT)}}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Ambientes
                <Icon style={styles.icons}
              name="forest"
              size={30}
              color="#874B87"
            />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#9AD262'}]} onPress={() => {ToastAndroid.show("Não implementado", ToastAndroid.SHORT)}}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Outro item
                <Icon style={styles.icons}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  },
  menu: {
    right: 0,
    alignSelf: 'center',
    position: 'absolute',
    top: 70,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    width: 200,
    height: 100,
    fontSize: 18,
  },
  itens: {
    width: "100%",
    height: "100%",
  },
  icons: {
    alignSelf: 'center',
  },
  title: {
    marginTop: 30,
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
});