import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuDrawer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Home</Text>
      <Text style={styles.item}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default MenuDrawer;