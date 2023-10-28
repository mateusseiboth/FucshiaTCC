import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate/index.js";
import SetupStyle from "../../components/SetupTemplate/style";
import { IconButton, Button, ProgressBar } from "react-native-paper";
import FucshiaModal from "../../components/Modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { recuperarDispositivo } from "../../utils/banco/index.js";

export default function Setup3() {
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);
  const [testando, setTestando] = React.useState(false);
  const [objectTeste, setObjectTeste] = React.useState("");
  const [device, setDevice] = React.useState(null);
  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  async function getDevices() {
    const databaseDevice = await recuperarDispositivo();
    console.log(databaseDevice);
    setDevice(databaseDevice);
    return databaseDevice;
  }

  function handleAction(route) {
    if (route === "ajudaporfavorsocorro") {
      setHelpModalVisible(true);
    }
  }

  React.useEffect(() => {
    async function teste() {
      const device = await getDevices();
      setTestando(true);
      console.log(device);
      const teste = await AsyncStorage.getItem("arrayConfigurado");
      const objectStorage = JSON.parse(teste);

      for (let i = 0; i < objectStorage.length; i++) {
        const item = objectStorage[i];
        await new Promise((resolve) => {
          setTimeout(() => {
            setObjectTeste(item.nome);
            console.log(
              "http://" +
                device +
                "/cm?cmnd=Power" +
                item.positionFriendly +
                "%20toggle"
            );
            axios
              .get(
                "http://" +
                  device +
                  "/cm?cmnd=Power" +
                  item.positionFriendly +
                  "%20toggle"
              )
              .then((response) => {
                console.log(response.data);
                resolve();
              });
          }, 2000);
        });
        await new Promise((resolve) => {
          setTimeout(() => {
            setObjectTeste(item.nome);
            axios
              .get(
                "http://" +
                  device +
                  "/cm?cmnd=Power" +
                  item.positionFriendly +
                  "%20toggle"
              )
              .then((response) => {
                console.log(response.data);
                resolve();
              });
          }, 2000);
        });
      }

      setTestando(false);
    }
    teste();
  }, []);

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Aguarde a configuração" currentPage={3} />

      <View style={SetupStyle.containerComum}>
        <View style={SetupStyle.centerFuc}>
          <Button
            icon={() => (
              <Icon name="check-circle-outline" size={60} color="#FF00FF" />
            )}
          ></Button>
        </View>
        <Text style={[SetupStyle.fucshia, SetupStyle.centerFuc]}>
          {testando
            ? `Testando ${objectTeste}`
            : "Testes concluidos com sucesso"}
        </Text>
        <Text style={[SetupStyle.subTitle]}>
          {" "}
          {testando
            ? "Processando testes, suas luzes podem piscar durante esse processo"
            : "Tudo Certo!"}
        </Text>
        {testando ? (
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
        />

        <Button
          icon={() => <Icon name="help-box" size={60} color="#FF00FF" />}
          onPress={() => handleAction("ajudaporfavorsocorro")}
          style={{ marginHorizontal: 4 }}
        />

        <Button
          icon={() => (
            <Icon
              name="arrow-right-bold-box-outline"
              size={60}
              color="#FF00FF"
            />
          )}
          onPress={() => handleRoute("FucshiaHome")}
          style={{ marginHorizontal: 4 }}
        />
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
    </View>
  );
}
