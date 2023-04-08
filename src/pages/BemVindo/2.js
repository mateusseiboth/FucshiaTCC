import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate/index.js";
import SetupStyle from "../../components/SetupTemplate/style";
import { Button } from "react-native-paper";
import FucshiaModal from '../../components/Modal';

export default function Setup2() {
  const navigation = useNavigation();
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleAction(route) {
    if (route === "ajudaporfavorsocorro") {
      setHelpModalVisible(true);
    }
  }

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Associe as Placas" currentPage={2} />

      <View style={SetupStyle.containerItens}>
        <Text
          style={{ fontWeight: "bold", alignSelf: "center", color: "#FFFFFF" }}
        >
          Configure abaixo o GPIO
          <Text style={[SetupStyle.fucshia]}>
            {" "}
            com o ambiente correspondente{" "}
          </Text>
        </Text>
      </View>

      <View style={SetupStyle.containerTitle} />

      <View style={SetupStyle.containerButton}>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => navigation.goBack()}
          style={{marginHorizontal: 4}}
        >
          Voltar
        </Button>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => handleAction("ajudaporfavorsocorro")}
          style={{marginHorizontal: 4}}
        >
          Ajuda
        </Button>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => handleRoute("Setup3")}
          style={{marginHorizontal: 4}}
        >
          Avançar
        </Button>
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
