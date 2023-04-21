import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function Flutua() {
    const navigation = useNavigation();

  function onPress(route){
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{console.log('apertei'); onPress("lamp")}} >
        <Icon style={styles.icons}
          name="lightbulb-on-outline"
          size={30}
          color="#408B93"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{console.log('apertei'); onPress("lamp")}}>
        <Icon style={styles.icons}
          name="door-closed"
          size={30}
          color="#99573D"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{console.log('apertei'); onPress("lamp")}}>
        <Icon style={styles.icons}
          name="video-outline"
          size={30}
          color="#874B87"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{console.log('apertei'); onPress("lamp")}}>
        <Icon style={styles.icons}
          name="devices"
          size={30}
          color="#648940"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 25,
  },
  button: {
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 5,
  },
  icons: {
    alignSelf: 'center',
  },
});