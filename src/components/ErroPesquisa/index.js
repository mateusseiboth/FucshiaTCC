import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainButton from "../mainButton";
import setupStyle from "../SetupTemplate/style";
import { Color } from "../../../GlobalStyles";

export default function ErroPesquisa({ setHaveDevice }) {
  return (
    <View style={setupStyle.containerItens}>
      <Button
        icon={() => (
          <Icon
            name="close-octagon"
            size={120}
            color={Color.colorError}
            style={{marginTop: 100}}
          />
        )}
      />
      <Text style={[setupStyle.textError, { marginHorizontal: 40 }]}>
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
    </View>
  );
}
