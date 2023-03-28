import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FuchsiaButton({text, route}) {
    
    const navigation = useNavigation();

    function chamarRota(rota){
        navigation.navigate(rota, {});
       
    }
    
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => chamarRota(route)}>
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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