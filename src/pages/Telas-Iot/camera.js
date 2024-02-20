import * as React from "react";
import {StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Alert} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Flutuante from "../../components/menuFlutuante/menuFlutuante";
import FucshiaBar from "../../components/topBar/topBar";
import axios from "axios";
import {recuperarDispositivo} from "../../utils/banco";
import {Modal, ProgressBar, TextInput} from "react-native-paper";
import {Color} from "../../../GlobalStyles";
import IotButton from "../../components/iotButton";
import ModalCamera from "../../components/Modal/cameras";

export default function Cameras() {
  const [elementos, setElementos] = React.useState([]);
  const [testando, setTestando] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const onClose = () => {
    setShowModal(false);
  };

  const getGPIO = async (databaseDevice) => {
    // Defina testando como true antes de fazer a solicitação
    setTestando(true);

    try {
      setElementos([
        {
          accessGPIO: 1,
          title: "Varanda",
          icon: "video-outline",
        },
        {
          accessGPIO: 2,
          title: "Garagem",
          icon: "video-outline",
        },
      ]);
      setTestando(false);
    } catch (error) {
      setTestando(false); // Defina como false no caso de erro
      console.log(error);
    }
  };

  React.useEffect(() => {
    // Defina testando como true antes de chamar getGPIO
    setTestando(true);
    getGPIO();
    // Não é necessário definir testando como false aqui
  }, []);

  const renderElementos = (elementos) => {
    console.log(elementos);
    const elementosRenderizados = [];

    for (let i = 0; i < elementos.length; i += 2) {
      const item1 = elementos[i];
      const item2 = elementos[i + 1];

      elementosRenderizados.push(
        <View
          style={styles.row}
          key={`row_${i}`}
        >
          <IotButton
            title={item1.title}
            bgColor="#D073D0"
            type="secondary"
            disabled={false}
            onPress={() => {
              setItem(item1);
              setShowModal(true);
            }}
          >
            <Icon
              style={styles.icons}
              name={item1.icon}
              size={60}
              color="#D073D0"
            />
          </IotButton>
          {item2 && (
            <IotButton
              title={item2.title}
              bgColor="#D073D0"
              type="secondary"
              disabled={false}
              onPress={() => {
                setItem(item2);
                setShowModal(true);
              }}
            >
              <Icon
                style={styles.icons}
                name={item2.icon}
                size={60}
                color="#D073D0"
              />
            </IotButton>
          )}
        </View>
      );
    }

    return elementosRenderizados;
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <FucshiaBar
          color="#D073D0"
          title="Câmeras ONVIF"
        />
      </View>

      <View style={styles.container}>
        {renderElementos(elementos)}
        <View style={styles.row}>
          {testando ? (
            <View style={{alignSelf: "center"}}>
              <ProgressBar
                indeterminate={true}
                width={300}
                color={"#FF00FF"}
                style={{marginTop: 20}}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show("Adicionar lâmapada não implementado, faça pela interface web", ToastAndroid.SHORT);
              }}
            >
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
          )}
        </View>

        <Flutuante />
      </View>
      <ModalCamera
        showModal={showModal}
        onClose={onClose}
        item={item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  itens: {
    zIndex: 4,
    width: 150,
    height: 150,
    margin: 10,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
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
    backgroundColor: "#EB865E",
    color: "#FFFFFF",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});
