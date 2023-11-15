import { StyleSheet, useColorScheme } from "react-native";
import { Color } from "../../../GlobalStyles";

const setupStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  containerItens: {
    flex: 1,
    width: "88%",
    height: "60%",
    alignSelf: "center",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 20,
  },
  containerComum: {
    width: "88%",
    height: "60%",
    alignSelf: "center",
    top: 10,
    backgroundColor: Color.colorCadetblue,
  },
  containerSetup: {
    position: "absolute",
    width: 270,
    height: 100,
    left: -8,
    top: -10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginRight: 0,
  },
  containerButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 50,
    marginTop: 20,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  fucshia: {
    color: Color.colorFuchsia,
    fontWeight: "bold",
  },
  title: {
    marginTop: 115,
    fontSize: 32,
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: Color.colorFuchsia,
  },
  subTitle: {
    fontSize: 26,
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  centerFuc: {
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    paddingTop: 20,
  },
  bolinha: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF00FF",
    overflow: "hidden",
    marginLeft: 30,
    marginTop: 48,
    marginRight: 30,
  },
  bolinhaVazia: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#FF00FF",
    overflow: "hidden",
    marginLeft: 30,
    marginTop: 48,
    marginRight: 30,
    borderWidth: 2,
    borderTopColor: "#FF00FF",
    borderBottomColor: "#FF00FF",
    borderRightColor: "#FF00FF",
  },
  seta: {
    width: 20,
    height: 20,
    borderTopWidth: 2,
    borderRightWidth: 2,
    transform: [{ rotate: "45deg" }],
    borderColor: "#F72585",
    marginTop: 52,
  },
  setaCauda: {
    position: "absolute",
    left: -12,
    marginTop: 40,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderStyle: "solid",
    borderColor: "#F72585",
  },
  textInside: {
    fontSize: 18,
    alignSelf: "center",
    color: Color.colorGray_100,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
});

export default setupStyle;
