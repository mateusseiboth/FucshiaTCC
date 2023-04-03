import * as React from 'react';
import {Text, View} from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import {useNavigation} from '@react-navigation/native';
import SetupTemplate from '../../components/SetupTemplate/index.js';
import SetupStyle from '../../components/SetupTemplate/style';

export default function Setup3() {
  const navigation = useNavigation();

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleAction(route) {
    if (route === 'ajudaporfavorsocorro') {
      console.log('Aham aham aham');
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
        <FuchsiaButton text="Voltar" onPress={() => navigation.goBack()} />
        <FuchsiaButton
          text="Ajuda"
          onPress={() => handleAction('ajudaporfavorsocorro')}
        />
        <FuchsiaButton
          text="Avançar"
          onPress={() => handleRoute('Confirmar')}
        />
      </View>
    </View>
  );
}
