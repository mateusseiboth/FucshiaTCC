import { StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const setupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    },

    bolinhaBaixo: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50,
        transform: [{ scaleX: 2 }, { rotate: '180deg' }],
      },
    
    bolinha: {
        width: 50,
    height: 50,
    borderRadius: 50,
        backgroundColor: '#FF00FF',
        overflow: 'hidden',
        transform: [{ scaleX: 2 }],
    }
    
});

export default setupStyle;
