import * as React from "react";
import { Image, Text, View } from "react-native";
import SetupStyle from "./style.js";
export default function SetupTemplate(props) {
  const [currentPage, setCurrentPage] = React.useState(props.currentPage);
  React.useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  return (
    <View style={SetupStyle.container}>
      <View style={SetupStyle.containerSetup}>
        <Image
          style={SetupStyle.tinyLogo}
          resizeMode="contain"
          source={require("../../../assets/logoTipoSVGMasPNG.png")}
        />

        <View style={SetupStyle.seta} />
        <View
          style={
            currentPage == 1 ? SetupStyle.bolinha : SetupStyle.bolinhaVazia
          }
        />
        <View style={SetupStyle.seta} />
        <View
          style={
            currentPage == 2 ? SetupStyle.bolinha : SetupStyle.bolinhaVazia
          }
        />
        <View style={SetupStyle.seta} />
        <View
          style={
            currentPage == 3 ? SetupStyle.bolinha : SetupStyle.bolinhaVazia
          }
        />
      </View>

      <View>
        <Text style={SetupStyle.title}>{props.titulo}</Text>
      </View>
    </View>
  );
}
