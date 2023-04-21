import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Flutuante from "../../components/menuFlutuante/menuFlutuante";
import FucshiaBar from "../../components/topBar/topBar";

const elementos = [
  { title: "Quarto #1", icon: "lightbulb-on-outline" },
  { title: "Quarto #2", icon: "lightbulb-on-outline" },
  { title: "Quarto #3", icon: "lightbulb-on-outline" },
  { title: "Quarto #4", icon: "lightbulb-off-outline" },
  { title: "Quarto #5", icon: "lightbulb-off-outline" },
  { title: "Quarto #6", icon: "lightbulb-off-outline" },
];

export default function Luzes() {
  const renderElementos = () => {
    const elementosRenderizados = [];

    for (let i = 0; i < elementos.length; i += 2) {
      const item1 = elementos[i];
      const item2 = elementos[i + 1];

      elementosRenderizados.push(
        <View style={styles.row} key={`row_${i}`}>
          <TouchableOpacity onPress={() => { ToastAndroid.show(`Clicado na lâmpada ${item1.title}`, ToastAndroid.SHORT);}}>
            <View style={styles.itens}>
              <Text style={[styles.title]}>{item1.title}</Text>
              <Icon
                style={styles.icons}
                name={item1.icon}
                size={60}
                color="#408B93"
              />
            </View>
          </TouchableOpacity>
          {item2 && (
            <TouchableOpacity onPress={() => { ToastAndroid.show(`Clicado na lâmpada ${item2.title}`, ToastAndroid.SHORT);}}>
              <View style={styles.itens}>
                <Text style={[styles.title]}>{item2.title}</Text>
                <Icon
                  style={styles.icons}
                  name={item2.icon}
                  size={60}
                  color="#408B93"
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      );
    }

    return elementosRenderizados;
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FucshiaBar color="#63D5E2" title="Luzes" />
      </View>

      <View style={styles.container}>
        {renderElementos()}

        <View style={styles.row}>
          <TouchableOpacity onPress={() => { ToastAndroid.show("Adicionar lâmapada não implementado", ToastAndroid.SHORT);}}>
            <View style={styles.itens}>
              <Text></Text>
              <Icon
                style={styles.icons}
                name="plus-circle-outline"
                size={60}
                color="#BCBCBC"
              />
            </View>
          </TouchableOpacity>
        </View>

        <Flutuante />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itens: {
    zIndex: 4,
    width: 150,
    height: 150,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  icons: {
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#63D5E2",
    color: "#FFFFFF",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});
