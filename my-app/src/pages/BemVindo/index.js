import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

export default function BemVindo() {
    return (
        <View>
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../.././assets/logoBaixaQualidade.png')}
                />
            </KeyboardAvoidingView>
            <View >
                <Text style={[styles.fucshia, styles.title]} >Fuchsia</Text>
            </View>

            <View>
                <Text>
                    Bem vindo ao
                    <Text style={[styles.fucshia]}> Fucshia Home Assistant </Text>
                    ! Deixe me guiá-lo em sua primeira configuração.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 32,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 66,
        height: 58,
    },
    tinyLogo: {
        width: 100,
        height: 100
    },
    fucshia: {
        color: "#FF00FF",
        fontWeight: "bold"
    },
    title: {
        fontSize: 32
    }
});