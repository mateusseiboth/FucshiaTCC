import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FuchsiaButton from '../../components/FucshiaButton';

export default function BemVindo() {
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
                    Bem vindo ao
                    <Text style={[styles.fucshia]}> Fucshia Home Assistant</Text>
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
                        Deixe me guiá-lo em sua primeira configuração.
                    </Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                <FuchsiaButton text="Avançar"></FuchsiaButton>
                <FuchsiaButton text="Desisto, não quero minha casa automática"></FuchsiaButton>
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
        flex: 1,
    },
    containerTitle: {
        flex: 0.5

    },
    containerButton: {
        flex: 2
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