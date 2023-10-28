import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate/index.js";
import SetupStyle from "../../components/SetupTemplate/style";
import { ProgressBar, Button } from "react-native-paper";
import FucshiaModal from "../../components/Modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { recuperarDispositivo } from "../../utils/banco/index.js";
import axios from "axios";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setup2() {
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);
  const [device, setDevice] = React.useState(null);
  const [gpio, setGPIO] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const [textInput, setTextInput] = React.useState("");
  const [tryAgain, setTryAgain] = React.useState(1);
  async function getDevices() {
    setLoading(true);
    const databaseDevice = await recuperarDispositivo();
    setDevice(databaseDevice);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    await getGPIO(databaseDevice);
    setLoading(false);
  }

  React.useEffect(() => {
    getDevices();
  }, [tryAgain]);

  const getGPIO = async (databaseDevice) => {
    setLoading(true);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    try {
      console.log("http://" + databaseDevice + "/cm?cmnd=Template");
      const gpio = axios
        .get("http://" + device + "/cm?cmnd=Template", headers)
        .then((result) => {
          console.log(result.data);
          const objectGPIO = result.data.GPIO.map((item, index) => {
            return {
              funcao:
                item > 250
                  ? "Relay Invertido"
                  : item > 190 && item < 200
                  ? "Switch Normal"
                  : "Não definido",
              pino:
                index >= 6 && index <= 7
                  ? index + 3
                  : index >= 8
                  ? index + 4
                  : index,
              nome: "",
              chaveItem: item,
            };
          });
          let objectRelay = objectGPIO.filter((item) => item.chaveItem > 250);
          objectRelay = objectRelay.map((item, index) => {
            return {
              ...item,
              positionFriendly: index + 1,
            };
          });

          axios
            .get("http://" + device + "/cm?cmnd=FriendlyName")
            .then((result) => {
              objectRelay.forEach((item) => {
                const friendlyNameKey = `FriendlyName${item.positionFriendly}`;
                if (result.data[friendlyNameKey]) {
                  item.nome = result.data[friendlyNameKey];
                }
              });
              console.log(objectRelay);
              setGPIO(objectRelay);
            });
        })
        .catch((error) => {
          console.log(error);
          setTryAgain(tryAgain + 1);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  const renderSelects = () => {
    const selects = [];
    if (gpio) {
      for (let i = 0; i < gpio.length; i += 2) {
        const item1 = gpio[i];
        const item2 = i + 1 < gpio.length ? gpio[i + 1] : null;

        selects.push(
          <View key={i} style={styles.selectContainer}>
            <View style={styles.selectGroup}>
              <TouchableOpacity
                onPress={() => {
                  handleGPIO(item1);
                }}
              >
                <Text style={[styles.fucshia]}>
                  GPIO {item1.pino} -{" "}
                  {item1.nome == "" ? item1.funcao : item1.nome}
                </Text>
              </TouchableOpacity>
            </View>
            {item2 && (
              <View style={styles.selectGroup}>
                <TouchableOpacity
                  onPress={() => {
                    handleGPIO(item2);
                  }}
                >
                  <Text style={[styles.fucshia]}>
                    GPIO {item2.pino} -{" "}
                    {item2.nome == "" ? item2.funcao : item2.nome}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      }
    }
    return selects;
  };

  const onClose = () => {
    setShowModal(false);
  };

  const handleGPIO = (item) => {
    setTextInput("");
    console.log(item);
    setItem(item);
    setShowModal(true);
  };

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Associe as Placas" currentPage={2} />

      <View style={SetupStyle.containerItens}>
        <Text
          style={{ fontWeight: "bold", alignSelf: "center", color: "#FFFFFF" }}
        >
          Clique no GPIO para nomear
          <Text style={[SetupStyle.fucshia]}>
            {" "}
            com o ambiente correspondente{" "}
          </Text>
        </Text>
        <Text style={[SetupStyle.fucshia, { textAlign: "center" }]}>
          Configurando {device}
        </Text>

        {renderSelects()}
        {loading ? (
          <View style={{ alignSelf: "center" }}>
            <ProgressBar
              indeterminate={true}
              width={300}
              color={"#FF00FF"}
              style={{ marginTop: 20 }}
            />
          </View>
        ) : (
          <View />
        )}
      </View>

      <View style={SetupStyle.containerButton}>
        <Button
          icon={() => (
            <Icon
              name="arrow-left-bold-box-outline"
              size={60}
              color="#FF00FF"
            />
          )}
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 4 }}
        ></Button>
        <Button
          icon={() => <Icon name="help-box" size={60} color="#FF00FF" />}
          onPress={() => setHelpModalVisible(true)}
          style={{ marginHorizontal: 4 }}
        ></Button>
        <Button
          icon={() => (
            <Icon
              name="arrow-right-bold-box-outline"
              size={60}
              color="#FF00FF"
            />
          )}
          onPress={() => {
            const saveItem = async () => {
              try {
                await AsyncStorage.setItem(
                  "arrayConfigurado",
                  JSON.stringify(gpio)
                );
              } catch (error) {
                console.error("Erro ao salvar no AsyncStorage:", error);
              }
            };
            saveItem();
            handleRoute("Setup3");
          }}
          style={{ marginHorizontal: 4 }}
        ></Button>
      </View>
      <FucshiaModal
        visible={helpModalVisible}
        onClose={() => setHelpModalVisible(false)}
        title="Ajuda"
        content={`Para receber ajuda por favor entre em contato no número abaixo:
         ${"\n"}(11) 99999-9999 
         ${"\n"}ou pelo email:
         ${"\n"}fucshia@golpedocartaocromado.com.br`}
      />
      {showModal && (
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            onClose();
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                padding: 20,
                width: "80%",
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
              >
                Renomeando GPIO{item.pino}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite o nome do ambiente"
                value={textInput}
                onChangeText={(text) => setTextInput(text)}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => onClose()}>
                  <Text
                    style={{ color: "blue", marginTop: 20, marginRight: 20 }}
                  >
                    Fechar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    axios
                      .get(
                        "http://" +
                          device +
                          "/cm?cmnd=FriendlyName" +
                          item.positionFriendly +
                          "%20" +
                          textInput
                      )
                      .then((result) => {
                        console.log(result.data);
                        ToastAndroid.show(
                          `Nome ${textInput} aplicado em GPIO${item.pino}`,
                          ToastAndroid.LONG
                        );
                        const newArray = gpio.map((itemGPIO) => {
                          return {
                            ...itemGPIO,
                            nome:
                              itemGPIO.pino == item.pino
                                ? textInput
                                : itemGPIO.nome,
                          };
                        });
                        setGPIO(newArray);

                        setShowModal(false);
                      })
                      .catch((error) => {
                        console.log(error);
                        Alert.alert(
                          "Ocorreu um erro",
                          `${error.message}`,
                          [
                            {
                              text: "Fechar",
                              style: "cancel",
                            },
                          ],
                          { cancelable: true }
                        );
                      });
                  }}
                >
                  <Text style={{ color: "blue", marginTop: 20 }}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  selectGroup: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#FF00FF",
    borderRadius: 10,
  },
  selectTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
});
