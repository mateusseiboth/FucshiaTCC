import * as React from 'react';
import { Text, View } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import SetupStyle from '../../components/SetupTemplate/style';
import { useNavigation } from '@react-navigation/native';
import SetupTemplate from '../../components/SetupTemplate/index.js';

export default function BemVindo() {
    const navigation = useNavigation();

    function handleRoute(route){
       navigation.navigate(route, {});
      }

      function handleCommand(route){
        console.log(route)
       }
       
    return (
        <View style={SetupStyle.container}>
           <SetupTemplate>

           </SetupTemplate>

           <View style={SetupStyle.containerTitle}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Bem vindo ao
                    <Text style={[SetupStyle.fucshia]}> Fucshia Home Assistant</Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                        Deixe me guiá-lo em sua primeira configuração.
                    </Text>
                </View>
            </View>

            <View style={SetupStyle.containerButton}>
                <FuchsiaButton text="Avançar" onPress={() => handleRoute('Setup1')}></FuchsiaButton>
                <FuchsiaButton text="Desisto, não quero minha casa automática" onPress={() => handleCommand('Mandei parar')}></FuchsiaButton>
            </View>
        </View>
    );
}
