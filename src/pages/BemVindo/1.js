import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import {useNavigation} from '@react-navigation/native';
import SetupTemplate from '../../components/SetupTemplate/index.js';
import SetupStyle from '../../components/SetupTemplate/style';
import {scanNetwork} from '../../utils/index';
import {PERMISSIONS} from 'react-native-permissions';
import {request} from 'react-native-permissions';
import {Progress, ProgressBar} from 'react-native-paper';

export default function Setup1() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  const permitir = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (result === 'granted') {
        console.log('Permissão concedida!');
        fetchDevices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDevices = async () => {
    try {
      const devicesFound = await scanNetwork();
      setDevices(devicesFound);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [devices]);

  const navigation = useNavigation();

  function handleRoute(route) {
    navigation.navigate(route, {});
  }

  function handleAction(route) {
    if (route === 'wifi') {
      permitir();
      setLoading(true);
    }
  }

  return (
    <View style={SetupStyle.container}>
      <SetupTemplate titulo="Selecione as placas" currentPage={1} />

      <View style={SetupStyle.containerItens}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
          Precisamos de acesso a sua localização
          <Text style={[SetupStyle.fucshia]}>
            {' '}
            para buscar dispositivos próximos.{' '}
          </Text>
        </Text>
        <View>
          <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Toque abaixo para permitir
          </Text>
          {devices.map((device, index) => (
            <FuchsiaButton
              key={index}
              text={device.IP}
              onPress={() => console.log('aaainnnnn')}
            />
          ))}
        </View>
        <View style={{position: 'absolute', bottom: 0, alignSelf: 'center', alignContent: 'center', alignItems: 'center'}}>
          {loading ? (
            <View style={{alignSelf: 'center'}}>
              <ProgressBar
                indeterminate={true}
                width={300}
                color={'#F49AC1'}
                style={{marginTop: 20}}
              />
            </View>
          ) : (
            <View />
          )}
          <FuchsiaButton text="   Buscar   " onPress={() => handleAction('wifi')} />
        </View>
      </View>

      <View style={SetupStyle.containerButton}>
        <FuchsiaButton text="Voltar" onPress={() => navigation.goBack()} />
        <FuchsiaButton text="Avançar" onPress={() => handleRoute('Setup2')} />
      </View>
    </View>
  );
}
