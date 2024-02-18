import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Animated} from "react-native";

const Loader = () => {
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000); // Intervalo de 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {opacity}]}>Offline</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Loader;
