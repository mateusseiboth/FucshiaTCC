import * as React from "react";
import { Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate";
import SetupStyle from "../../components/SetupTemplate/style";
import { scanNetwork } from "../../utils/Search/index";
import { PERMISSIONS, request } from "react-native-permissions";
import { ProgressBar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FucshiaModal from "../../components/Modal";
import { salvarDispositivo } from "../../utils/banco";
import FuchsiaButton from "../../components/FucshiaButton";

export default function Setup1() {
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);
  const [haveDevice, setHaveDevice] = React.useState(true);
  const [testando, setTestando] = React.useState(false);

  // função para solicitar permissão de localização
  const permitir = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      const result2 = await request(PERMISSIONS.ANDROID.ACCESS_NETWORK_STATE);
      if (result === "granted") {
        console.log("Permissão concedida!");
        fetchDevices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDevices = async () => {
    try {
      const devicesFound = await scanNetwork(setTestando);
      setDevices(devicesFound);
      devicesFound.length > 0 ? setHaveDevice(true) : setHaveDevice(false);
      typeof devicesFound === "string" ? setTestando(devicesFound) : null;
      console.log(devicesFound);
    } catch (error) {
      console.log(error);
    }
  };

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleAction(route, device = null) {
    console.log('Alguma coisa qualquer')
    if (route === "wifi") {
      permitir();
      setLoading(true);
    } else if (route === "ajudaporfavorsocorro") {
      setHelpModalVisible(true);
    } else if (route === "salvar") {
      Alert.alert(
        "Salvar dispositivo",
        `Deseja salvar o dispositivo ${device.IP} no banco de dados?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Salvar",
            onPress: () => {
              // adiciona o dispositivo ao banco de dados
              salvarDispositivo(device.IP);
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  React.useEffect(() => {
    setLoading(false);
  }, [devices]);

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Selecione as placas" currentPage={1} />

      {loading ? (
        <View style={{ alignSelf: "center" }}>
         <Text>
         {testando}
         </Text>
          <ProgressBar
            indeterminate={true}
            width={300}
            color={"#FF00FF"}
            style={{ marginTop: 20 }}
          />
        </View>
      ) : (
        <>
          {haveDevice ? (
            <View style={SetupStyle.containerItens}>
              <Text
                style={{ fontWeight: "bold", alignSelf: "center", color: "#FFFFFF" }}
              >
                Precisamos de acesso a sua localização
                <Text style={[SetupStyle.fucshia]}>
                  {" "}
                  para buscar dispositivos próximos.
                </Text>
              </Text>
              <View>
                {devices.map((device, index) => (
                  <>
                    <FuchsiaButton
                      key={index}
                      onPress={() => handleAction("salvar", device)}
                      text={device.IP}
                    />
                    <View />
                  </>
                ))}
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  paddingBottom: 50,
                }}
              >
                <FuchsiaButton
                  mode="contained"
                  buttonColor="#FF00FF"
                  onPress={() => handleAction("wifi")}
                  style={{ marginVertical: 4 }}
                  text="BUSCAR"
                />
              </View>
            </View>
          ) : (
            <>
              <View style={SetupStyle.containerItens}>
                <Button
                  icon={() => (
                    <Icon name="alpha-x-circle-outline"
                     size={60} color="#FF00FF" />
                  )}
                ></Button>
                <Text
                  style={{ fontWeight: "bold", alignSelf: "center", color: "#000" }}
                >
                  Não encontramos equipamentos próximos.
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                    paddingBottom: 50,
                  }}
                >
                  <FuchsiaButton
                    onPress={() => setHaveDevice(true)}
                    text="Tentar novamente"
                  />
                </View>
              </View>
            </>
          )}
        </>
      )}

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
          onPress={() => handleRoute("Setup2")}
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
