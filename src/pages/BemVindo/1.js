import * as React from "react";
import { Text, View, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate";
import SetupStyle from "../../components/SetupTemplate/style";
import { scanNetwork } from "../../utils/Search/index";
import { PERMISSIONS, request } from "react-native-permissions";
import { ProgressBar, Button } from "react-native-paper";
import FucshiaModal from "../../components/Modal";
import { salvarDispositivo } from "../../utils/banco";
import MainButton from "../../components/mainButton";
import SmallButton from "../../components/smallButton";
import setupStyle from "../../components/SetupTemplate/style";
import ErroPesquisa from "../../components/ErroPesquisa";
import { Color } from "../../../GlobalStyles";
import Spinner from "react-native-progress";

export default function Setup1() {
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);
  const [haveDevice, setHaveDevice] = React.useState(true);
  const [testando, setTestando] = React.useState(false);
  const [selectedDevice, setSelectedDevice] = React.useState(null);
  const [showDeviceButtons, setShowDeviceButtons] = React.useState(true);

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
    console.log("Alguma coisa qualquer");
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
              setSelectedDevice(device);
              setShowDeviceButtons(false);
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
      <SetupTemplate title="Selecione as Placas" currentPage={1} />

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[setupStyle.textInside, { paddingBottom: 40 }]}>
            {testando}
          </Text>
          <ActivityIndicator
            size={240}
            color={Color.colorFuchsia}
            style={{ paddingBottom: 80 }}
          />
        </View>
      ) : (
        <>
          {haveDevice ? (
            <View style={SetupStyle.containerItens}>
              {showDeviceButtons ? (
                <>
                  {(devices.length <= 0) ? (
                    
                    <Text style={setupStyle.textInside}>
                      Precisamos de acesso a sua localização
                      <Text style={[SetupStyle.fucshia]}>
                        {" "}
                        para buscar dispositivos próximos.
                      </Text>
                    </Text>
                  ) : null}
                  <View
                    style={{
                      alignSelf: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {(devices.length > 0) ? (
                      <Text style={[SetupStyle.textInside, { marginTop: 20, marginBottom: 20 }]}>
                        Dispositivos encontrados:
                      </Text>
                    ) : null}
                    {devices.map((device, index) => (
                      <View style={{ marginBottom: 20 }} key={index}>
                        <MainButton
                          onPress={() => handleAction("salvar", device)}
                          text={device.IP}
                        />
                      </View>
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
                    <MainButton
                      mode="contained"
                      buttonColor="#FF00FF"
                      onPress={() => handleAction("wifi")}
                      style={{ marginVertical: 4 }}
                      text={(devices.length <= 0) ? "BUSCAR" : "NOVA BUSCA"}
                    />
                  </View>
                </>
              ) : (
                <View
                  style={{
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={SetupStyle.textInside}>
                    Dispositivo selecionado:
                  </Text>
                  <Text style={[SetupStyle.fucshia, { marginTop: 20, fontSize: 32 }]}>
                    {selectedDevice?.IP}
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <>
              <ErroPesquisa />
            </>
          )}
        </>
      )}

      <View style={SetupStyle.containerButton}>
        {loading ? null : (
          <>
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
              onPress={() => handleRoute("Setup2")}
              type="primary"
              disabled={!selectedDevice}
            />
          </>
        )}
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
