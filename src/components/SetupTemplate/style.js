import { StyleSheet, useColorScheme } from "react-native";

const setupStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  containerItens: {
    width: "88%",
    height: "60%",
    alignSelf: "center",
    top: -20,
    backgroundColor: "#252525",
  },
  containerComum: {
    width: "88%",
    height: "60%",
    alignSelf: "center",
    top: 10,
    backgroundColor: "#1B1B1B",
  },
  containerSetup: {
    position: "absolute",
    width: 270,
    height: 100,
    left: -8,
    top: -10,
    flexDirection: "row",
    alignItems: "center",
  },
  containerButton: {
    flex: 0.5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  fucshia: {
    color: "#FF00FF",
    fontWeight: "bold",
  },
  title: {
    marginTop: 80,
    fontSize: 32,
    alignSelf: "center",
    //color: useColorScheme() === 'dark' ? '#FFFFFF' : '#000000',
    fontWeight: "bold",
    color: "#FFFFFF",
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
    backgroundColor: "#1B1B1B",
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
});

export default setupStyle;
