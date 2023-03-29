import * as React from 'react';
import { Text, View } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import { useNavigation } from '@react-navigation/native';
import { useState} from 'react';
import SetupTemplate from '../../components/SetupTemplate/index.js';
import SetupStyle from '../../components/SetupTemplate/style';

export default function Setup2() {
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
            <SetupTemplate>

            </SetupTemplate>

            <View style={SetupStyle.containerTitle}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Configure abaixo o GPIO
                    <Text style={[SetupStyle.fucshia]}> com o ambiente correspondente </Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                       Aqui tem que ter um menu ou select
                    </Text>
                </View>
            </View>

            <View style={SetupStyle.containerButton} >
                
                <FuchsiaButton text="Ajuda" onPress={() => handleAction('ajudaporfavorsocorro')}></FuchsiaButton>
                <FuchsiaButton text="Avançar" onPress={() => handleRoute('Confirmar')}></FuchsiaButton>
            </View>
        </View>
    );
}
