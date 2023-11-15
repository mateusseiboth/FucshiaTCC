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
import SmallButton from "../../components/smallButton.js";
import { Color } from "../../../GlobalStyles.js";

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
      <SetupTemplate title="Configurando" currentPage={3} />

      <View style={[SetupStyle.containerItens, SetupStyle.centerFuc]}>
        {!testando && (
          <View style={{ textAlign: "center" }}>
            <Button
              icon={() => (
                <Icon
                  name="check-circle-outline"
                  size={90}
                  color={Color.colorFuchsia}
                />
              )}
            ></Button>
            <Text style={{ color: Color.colorBlack, textAlign: "center" }}>
              Tudo Certo com a configuração!
            </Text>
          </View>
        )}

        <Text style={[SetupStyle.centerFuc, { color: Color.colorFuchsia }]}>
          {testando ? `Testando ${objectTeste}` : ""}
        </Text>
        <Text style={[{ color: Color.colorBlack, textAlign: "center" }]}>
          {" "}
          {testando
            ? "Processando testes, suas luzes podem piscar durante esse processo"
            : ""}
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
        <SmallButton
          text="VOLTAR"
          onPress={() => navigation.goBack()}
          type="secondary"
          disabled={false}
        />

        {/* <Button
          icon={() => <Icon name="help-box" size={60} color="#FF00FF" />}
          onPress={() => handleAction("ajudaporfavorsocorro")}
          style={{ marginHorizontal: 4 }}
        /> */}

        <SmallButton
          text="PRÓXIMO"
          onPress={() => handleRoute("FucshiaHome")}
          type="primary"
          disabled={false}
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
