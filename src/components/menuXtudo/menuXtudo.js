import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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
          <TouchableOpacity style={[styles.menuItem]} onPress={() => handleRoute("luzes")}>
              <View style={[styles.itens, { backgroundColor: '#63D5E2' }]}>
                <Text style={[styles.title]}>Luzes
                  <Icon style={styles.icons}
                    name="lightbulb-on-outline"
                    size={60}
                    color="#408B93"
                  />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#EB865E'}]} onPress={() => handleRoute("luzes")}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Portões
                <Icon style={styles.icons}
              name="door-closed"
              size={60}
              color="#99573D"
            />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#D073D0'}]} onPress={() => handleRoute("luzes")}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Câmeras
                <Icon style={styles.icons}
              name="video-outline"
              size={60}
              color="#874B87"
            />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, {backgroundColor: '#9AD262'}]} onPress={() => handleRoute("luzes")}>
              <View style={[styles.itens]}>
                <Text style={[styles.title]}>Aparelhos
                <Icon style={styles.icons}
              name="devices"
              size={60}
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
    right: 10,
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
    marginTop: 5,
    width: 550,
    height: 100,
    fontSize: 18,
  },
  itens: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    
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
});