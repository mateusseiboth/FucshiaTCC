import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupTemplate from "../../components/SetupTemplate/index.js";
import SetupStyle from "../../components/SetupTemplate/style";
import { IconButton, Button } from "react-native-paper";
import FucshiaModal from "../../components/Modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
        <Button
          icon={() => (
            <Icon name="check-circle-outline" size={60} color="#FF00FF" />
          )}
        ></Button>
        <Text style={[SetupStyle.fucshia, SetupStyle.centerFuc]}>
          Teste 2/2 Concluído.
        </Text>
        <Text style={[SetupStyle.subTitle]}> Tudo Certo! </Text>
      </View>

      <View style={SetupStyle.containerTitle} />

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
