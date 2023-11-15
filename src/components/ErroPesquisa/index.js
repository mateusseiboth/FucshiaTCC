import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainButton from "../mainButton";
import setupStyle from "../SetupTemplate/style";

export default function ErroPesquisa() {
  <View style={setupStyle.containerItens}>
    <Button
      icon={() => (
        <Icon name="alpha-x-circle-outline" size={60} color="#FF00FF" />
      )}
    ></Button>
    <Text style={{ fontWeight: "bold", alignSelf: "center", color: "#000" }}>
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
      <MainButton onPress={() => setHaveDevice(true)} text="Tentar novamente" />
    </View>
  </View>;
}
