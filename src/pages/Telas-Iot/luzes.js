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
import ModalRename from "../../components/Modal/renomear";

export default function Luzes() {
  const [elementos, setElementos] = React.useState([]);
  const [device, setDevice] = React.useState(null);
  const [testando, setTestando] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const onClose = () => {
    setShowModal(false);
  };

  const handleGPIO = (itemInternal) => {
    console.log(itemInternal);
    setItem(itemInternal);
    setShowModal(true);
  };

  async function getDevices() {
    const databaseDevice = await recuperarDispositivo();
    return databaseDevice;
  }

  const getGPIO = async (databaseDevice) => {
    // Defina testando como true antes de fazer a solicitação
    setTestando(true);

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      const device = await getDevices();
      setDevice(device);
      console.log("http://" + databaseDevice + "/cm?cmnd=State");
      const gpio = axios
        .get("http://" + device + "/cm?cmnd=State", headers)
        .then((result) => {
          console.log(result.data);
          let combinedArray = [];
          let chaves = result.data;
          const names = axios
            .get("http://" + device + "/cm?cmnd=FriendlyName", headers)
            .then((result) => {
              Object.keys(chaves).forEach((powerKey) => {
                const number = powerKey.match(/\d+/);
                if (number) {
                  const friendlyNameKey = `FriendlyName${number}`;
                  if (result.data[friendlyNameKey]) {
                    const combinedObject = {
                      FriendlyName: result.data[friendlyNameKey],
                      Power: chaves[powerKey],
                      accessGPIO: number,
                    };
                    combinedArray.push(combinedObject);
                  }
                }
              });
              const setArray = combinedArray.map((item) => {
                console.log(item);
                return {
                  accessGPIO: item.accessGPIO,
                  title: item.FriendlyName,
                  icon: item.Power === "ON" ? "lightbulb-on-outline" : "lightbulb-off-outline",
                };
              });
              setElementos(setArray);
              console.log(setArray);
            })
            .catch((error) => {
              ToastAndroid.show("Erro ao requisitar dados", ToastAndroid.SHORT);
              console.log(error);
            });

          const powerKeys = Object.keys(result.data).filter((key) => key.startsWith("POWER"));

          // Criar um novo objeto apenas com as chaves filtradas
          const powerData = {};
          powerKeys.forEach((key) => {
            powerData[key] = result.data[key];
          });
          console.log(powerData);
          setTestando(false);
        })
        .catch((error) => {
          ToastAndroid.show("Erro ao requisitar dados", ToastAndroid.SHORT);
          console.log(error);
        });
    } catch (error) {
      setTestando(false); // Defina como false no caso de erro
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (!showModal) {
      setTestando(true);
      getGPIO();
    }
  }, [showModal]);

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
            bgColor="#63D5E2"
            type="secondary"
            disabled={false}
            onLongPress={() => {
              handleGPIO(item1);
            }}
            onPress={() => {
              setTestando(true);
              ToastAndroid.show(`Alternando ${item1.title}`, ToastAndroid.SHORT);
              axios
                .get("http://" + device + "/cm?cmnd=Power" + item1.accessGPIO + "%20toggle")
                .then((response) => {
                  const newArray = elementos.map((item) => {
                    if (item.accessGPIO === item1.accessGPIO) {
                      return {
                        ...item,
                        icon: item.icon === "lightbulb-on-outline" ? "lightbulb-off-outline" : "lightbulb-on-outline",
                      };
                    } else {
                      return item;
                    }
                  });
                  setElementos(newArray);
                  setTestando(false);
                })
                .catch((error) => {
                  ToastAndroid.show(`Erro ao alterar ${item1.title}`, ToastAndroid.SHORT);
                });
            }}
          >
            <Icon
              style={styles.icons}
              name={item1.icon}
              size={60}
              color="#63D5E2"
            />
          </IotButton>
          {item2 && (
            <IotButton
              title={item2.title}
              bgColor="#63D5E2"
              type="secondary"
              disabled={false}
              onLongPress={() => {
                handleGPIO(item2);
              }}
              onPress={() => {
                setTestando(true);
                ToastAndroid.show(`Alternando ${item2.title}`, ToastAndroid.SHORT);
                axios
                  .get("http://" + device + "/cm?cmnd=Power" + item2.accessGPIO + "%20toggle")
                  .then((response) => {
                    console.log(response.data);
                    const newArray = elementos.map((item) => {
                      if (item.accessGPIO === item2.accessGPIO) {
                        return {
                          ...item,
                          icon: item.icon === "lightbulb-on-outline" ? "lightbulb-off-outline" : "lightbulb-on-outline",
                        };
                      } else {
                        return item;
                      }
                    });
                    setElementos(newArray);
                    setTestando(false);
                  })
                  .catch((error) => {
                    ToastAndroid.show(`Erro ao alterar ${item2.title}`, ToastAndroid.SHORT);
                  });
              }}
            >
              <Icon
                style={styles.icons}
                name={item2.icon}
                size={60}
                color="#63D5E2"
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
          color="#63D5E2"
          title="Luzes"
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
      <ModalRename
        showModal={showModal}
        onClose={onClose}
        item={item}
        device={device}
        gpio={elementos}
        setGPIO={setElementos}
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
    backgroundColor: "#63D5E2",
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
