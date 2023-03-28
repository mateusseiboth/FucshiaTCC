import * as React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function BemVindo1() {
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
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.tinyLogo}
                    resizeMode="contain"
                    source={require('../../.././assets/logoTipoSVGMasPNG.png')}
                />
            </View>
            <View >
                <Text style={[styles.fucshia, styles.title]} >Fuchsia</Text>
            </View>

            <View style={styles.containerTitle}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Precisamos de acesso a sua localização
                    <Text style={[styles.fucshia]}> apenas para buscar dispositivos próximos. </Text>
                    Após a busca os dispositivos irão ser listados abaixo
                </Text>
            </View>


            {loading ? (<View >
                <ActivityIndicator />
                <Text>Buscando</Text>
            </View>) : (<View></View>)}

            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}} >
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Toque para iniciar busca</Text>
                </View>
                <FuchsiaButton text="Buscar" onPress={() => handleAction('wifi')}></FuchsiaButton>
                <FuchsiaButton text="Avançar" onPress={() => handleCommand('Mandei parar')}></FuchsiaButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo: {
        position: 'absolute', 
        top: 0
    },
    containerTitle: {
        flex: 0.5

    },
    containerButton: {
        flex: 2,
        width:150,
        height:50,
    },
    tinyLogo: {
        width: 230,
        height: 230
    },
    fucshia: {
        color: "#FF00FF",
        fontWeight: "bold"
    },
    title: {
        fontSize: 32
    }  
});