import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import { useNavigation } from '@react-navigation/native';
import SetupTemplate from '../../components/SetupTemplate/index.js';
import SetupStyle from '../../components/SetupTemplate/style';
import { scanNetwork } from '../../utils/index';


export default function Setup1() {
    const [devices, setDevices] = useState([]);
    const fetchDevices = async () => {
        scanNetwork(devicesFound => {
            setDevices(devicesFound);
        }, err => {
            console.log(err);
        });
        
      };

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function handleRoute(route) {
        navigation.navigate(route, {});
    }

    function handleAction(route) {
        if (route === 'wifi') {
            fetchDevices();
            setLoading(true);
            
        }
    }

    return (
        <View style={SetupStyle.container}>
            <SetupTemplate titulo="Selecione as placas" />

            <View style={SetupStyle.containerItens}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Precisamos de acesso a sua localização
                    <Text style={[SetupStyle.fucshia]}> para buscar dispositivos próximos. </Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                        Toque abaixo para permitir
                    </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    {loading ? (<View style={{alignSelf: 'center', alignItems: 'center' }}>
                        <ActivityIndicator />
                        <Text>Buscando</Text>
                    </View>) : (<View></View>)}
                    <FuchsiaButton text="Buscar" onPress={() => handleAction('wifi')}></FuchsiaButton>
                </View>
            </View>




            <View style={SetupStyle.containerButton} >


                <FuchsiaButton text="Avançar" onPress={() => handleRoute('Setup2')}></FuchsiaButton>
            </View>
        </View>
    );
}
