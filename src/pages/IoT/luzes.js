import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Flutuante from '../../components/menuFlutuante/menuFlutuante';
import FucshiaBar from '../../components/topBar/topBar';

export default function Luzes() {
    return (
        <View style={{flex:1}}>
            <View>
                <FucshiaBar color="#63D5E2" title="Luzes"/>
            </View>

            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.itens}>
                        <Text style={[styles.title]}>Quarto #1
                        </Text>
                        <Icon style={styles.icons}
                            name="lightbulb-on-outline"
                            size={60}
                            color="#408B93"
                        />
                    </View>
                    <View style={styles.itens}>
                        <Text style={[styles.title]}>Quarto #2
                        </Text>
                        <Icon style={styles.icons}
                            name="lightbulb-on-outline"
                            size={60}
                            color="#408B93"
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.itens}>
                        <Text style={[styles.title]}>Quarto #3
                        </Text>
                        <Icon style={styles.icons}
                            name="lightbulb-on-outline"
                            size={60}
                            color="#408B93"
                        />
                    </View>
                    <View style={styles.itens}>
                        <Text style={[styles.title]}>Quarto #4
                        </Text>
                        <Icon style={styles.icons}
                            name="lightbulb-off-outline"
                            size={60}
                            color="#408B93"
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.itens}>
                        <Text></Text>
                        <Icon style={styles.icons}
                            name="plus-circle-outline"
                            size={60}
                            color="#BCBCBC"
                        />
                    </View>
                </View>

                <Flutuante />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itens: {
        zIndex: 4,
        width: 150,
        height: 150,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#1B1B1B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    icons: {
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        width: "100%",
        textAlign: 'center',
        backgroundColor: '#63D5E2',
        color: '#FFFFFF',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: "#1B1B1B",
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',

    },
});