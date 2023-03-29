import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SetupTemplate from '../../components/SetupTemplate/index.js';
import SetupStyle from '../../components/SetupTemplate/style';

export default function Setup1() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function handleRoute(route) {
        navigation.navigate(route, {});
    }

    function handleAction(route) {
        if (route === 'wifi') {
            setLoading(true);
        }
    }

    return (
        <View style={SetupStyle.container}>
            <SetupTemplate>

            </SetupTemplate>

            <View style={SetupStyle.containerTitle}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Precisamos de acesso a sua localização
                    <Text style={[SetupStyle.fucshia]}> para buscar dispositivos próximos. </Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                       Toque abaixo para permitir
                    </Text>
                </View>
            </View>


            {loading ? (<View >
                <ActivityIndicator />
                <Text>Buscando</Text>
            </View>) : (<View></View>)}

            <View style={SetupStyle.containerButton} >
                
                <FuchsiaButton text="Buscar" onPress={() => handleAction('wifi')}></FuchsiaButton>
                <FuchsiaButton text="Avançar" onPress={() => handleRoute('Setup2')}></FuchsiaButton>
            </View>
        </View>
    );
}
