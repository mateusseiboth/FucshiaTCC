import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Avançar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Desisto, não quero minha casa automática
                        </Text>
                    </TouchableOpacity>
                </View>
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
    },
    button: {        
        borderRadius: 50,
        paddingVertical: 10,    
        margin: 5,
        alignSelf: 'center',
        width: '80%',       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF00FF'
    },
    textButton: {
        color: 'black'
    }
});