import { StyleSheet } from 'react-native';

const setupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerItens: {
        width: '88%',
        height: '60%',
        alignSelf: 'center',
        top: -20,
        backgroundColor: '#F1F1F1',
    },
    containerComum: {
        width: '88%',
        height: '60%',
        alignSelf: 'center',
        top: 10,
        backgroundColor: '#fff',
    },
    containerSetup: {
        position: 'absolute',
        width: 270,
        height: 100,
        left: -8,
        top: -10,
        flexDirection: 'row',
    },
    containerButton: {
        flex: 0.5,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 80,
        height: 80
    },
    fucshia: {
        color: "#FF00FF",
        fontWeight: "bold"
    },
    title: {
        marginTop: 80,
        fontSize: 32,
        alignSelf: 'center',
        color: "#FF00FF",
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 26,
        alignSelf: 'center',
        color: "#FF00FF",
        fontWeight: "bold"
    },
    centerFuc: {
        alignSelf: 'center',
        color: "#FF00FF",
        fontWeight: "bold"
    },
    bolinha: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FF00FF',
        overflow: 'hidden',
        marginLeft: 30,
        marginTop: 48,
        marginRight: 30,

    },
    bolinhaVazia: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#FF00FF',
        overflow: 'hidden',
        marginLeft: 30,
        marginTop: 48,
        marginRight: 30,
        borderWidth: 2,
        borderTopColor: '#FF00FF',
        borderBottomColor: '#FF00FF',
        borderRightColor: '#FF00FF',

    },
    seta: {
        width: 20,
        height: 20,
        borderTopWidth: 2,
        borderRightWidth: 2,
        transform: [{ rotate: '45deg' }],
        borderColor: '#F72585',
        marginTop: 52,
    },
    setaCauda: {
        position: 'absolute',
        left: -12,
        marginTop: 40,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderStyle: 'solid',


    },

});

export default setupStyle;
