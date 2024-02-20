import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Color, FontFamily } from "../../../GlobalStyles.js";

const SetupTemplate = (props) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  return (
    <View style={styles.container}>
      <View style={styles.setupContainer}>
        <Image
          style={styles.tinyLogo}
          resizeMode="contain"
          source={require("../../../assets/images/logo.png")}
        />

        <View style={styles.stepContainer}>
          <View style={styles.arrow} />
          <View
            style={currentPage === 1 ? styles.bullet : styles.emptyBullet}
          >
            <Text style={currentPage === 1 ? styles.bulletText : styles.emptyBulletText}>1</Text>
          </View>

          <View style={styles.arrow} />
          <View
            style={currentPage === 2 ? styles.bullet : styles.emptyBullet}
          >
            <Text style={currentPage === 2 ? styles.bulletText : styles.emptyBulletText}>2</Text>
          </View>

          <View style={styles.arrow} />
          <View
            style={currentPage === 3 ? styles.bullet : styles.emptyBullet}
          >
            <Text style={currentPage === 3 ? styles.bulletText : styles.emptyBulletText}>3</Text>
          </View>
        </View>

      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.horizontalLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorWhite,
    marginHorizontal: 20,
  },
  setupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    
  },
  tinyLogo: {
    width: 80,
    height: 80,
    marginLeft: 20,
    opacity: 0.7,
  },
  arrow: {
    width: 20,
    height: 20,
    borderTopWidth: 2,
    borderRightWidth: 2,
    transform: [{ rotate: "45deg" }],
    borderColor: Color.colorFuchsia,
    marginLeft: 5,
    marginRight: 10,
  },
  bullet: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: Color.colorFuchsia,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyBullet: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Color.colorFuchsia,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
  bulletText: {
    color: Color.colorWhite,
    fontWeight: "bold",
    fontSize: 18,
  },
  emptyBulletText: {
    color: Color.colorFuchsia,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    marginTop: 5,
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "bold",
    color: Color.colorFuchsia,
  },
  horizontalLine: {
    borderBottomColor: Color.colorWhitesmoke_300,
    borderBottomWidth: 5,
    marginBottom: 20,
    marginTop: 5,
    alignSelf: "center",
    width: 300,
  },
});

export default SetupTemplate;
