import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function FucshiaHome() {
  return (
    <View>
      <Text>Home?</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
  tinyLogo: {
    width: 100,
    height: 100
  },
  fucshia: {
    color: "#FF00FF",
    fontWeight: "bold" 
  },
  title: {
    fontSize: 32
  } 
});