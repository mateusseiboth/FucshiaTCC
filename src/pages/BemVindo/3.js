import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate/index.js";
import SetupStyle from "../../components/SetupTemplate/style";
import { IconButton, Button, MD3Colors } from "react-native-paper";
import FucshiaModal from '../../components/Modal';

export default function Setup3() {
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
      <SetupTemplate titulo="Aguarde a configuração" currentPage={3} />

      <View style={SetupStyle.containerComum}>
        <Text style={[SetupStyle.fucshia, SetupStyle.centerFuc]}>
          Teste 2/2 Concluído.
        </Text>
        <Text style={[SetupStyle.subTitle]}> Tudo Certo! </Text>
      </View>

      <View style={SetupStyle.containerTitle} />

      <View style={SetupStyle.containerButton}>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => handleAction("ajudaporfavorsocorro")}
        >
          Ajuda
        </Button>
        <Button
          mode="contained"
          buttonColor="#FF00FF"
          onPress={() => handleRoute("FucshiaHome")}
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
