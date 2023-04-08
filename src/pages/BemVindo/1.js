import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate";
import SetupStyle from "../../components/SetupTemplate/style";
import { scanNetwork } from "../../utils/Search/index";
import { PERMISSIONS, request } from "react-native-permissions";
import { ProgressBar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FucshiaModal from "../../components/Modal";

export default function Setup1() {
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);

  // função para solicitar permissão de localização
  const permitir = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
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
      const devicesFound = await scanNetwork();
      setDevices(devicesFound);
      console.log(devicesFound);
    } catch (error) {
      console.log(error);
    }
  };

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleAction(route) {
    if (route === "wifi") {
      permitir();
      setLoading(true);
    } else if (route === "ajudaporfavorsocorro") {
      setHelpModalVisible(true);
    }
  }

  React.useEffect(() => {
    setLoading(false);
  }, [devices]);

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Selecione as placas" currentPage={1} />

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
            <Button
              key={index}
              mode="contained"
              buttonColor="#FF00FF"
              style={{
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginVertical: 4,
                width: 100,
                height: 40,
              }}
              onPress={() => console.log("aaainnnnn")}
            >
              {device.IP}
            </Button>
          ))}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
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
          <Button
            mode="contained"
            buttonColor="#FF00FF"
            onPress={() => handleAction("wifi")}
            style={{ marginVertical: 4 }}
          >
            Buscar
          </Button>
        </View>
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
