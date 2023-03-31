import * as React from 'react';
import { Image, Text,View, StyleSheet } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';
import { useNavigation } from '@react-navigation/native';


export default function BemVindo() {
    const navigation = useNavigation();

    function handleRoute(route) {
        navigation.navigate(route, {});
    }

    function handleCommand(route) {
        console.log(route)
    }

    return (
        <View style={homeStyle.container}>
                <View style={homeStyle.containerLogo}>
                    <Image
                        style={homeStyle.tinyLogo}
                        resizeMode="contain"
                        source={require('../../../assets/logoTipoSVGMasPNG.png')}
                    />
                     {/* <Text style={[homeStyle.fucshia, homeStyle.title]} >Fuchsia</Text> */}
                </View> 

            <View style={[homeStyle.bolinha, homeStyle.bolinhaBaixo]}></View>
            <View style={homeStyle.containerTitle}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                    Bem vindo ao
                    <Text style={[homeStyle.fucshia]}> Fucshia Home Assistant</Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                        Deixe me guiá-lo em sua primeira configuração.
                    </Text>
                </View>
            </View>

            <View style={homeStyle.containerButton}>
                <FuchsiaButton text="Avançar" onPress={() => handleRoute('Setup1')}></FuchsiaButton>
                <FuchsiaButton text="Desisto, não quero minha casa automática" onPress={() => handleCommand('Mandei parar')}></FuchsiaButton>
            </View>
        
            
        </View>
    );
}

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 1,
        top: 0
    },
    containerTitle: {
        flex: 1

    },
    containerButton: {
        flex: 0.5,
        width:150,
        height:150,
    },
    tinyLogo: {
        width: 200,
        height: 200
    },
    fucshia: {
        color: "#FF00FF",
        fontWeight: "bold"
    },
    title: {
        fontSize: 32,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    
});
