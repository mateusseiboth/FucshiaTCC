import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const setupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo: {
        flex: 2,
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

export default setupStyle;
