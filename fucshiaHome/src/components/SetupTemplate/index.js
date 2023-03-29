import * as React from 'react';
import { Image, Text, View } from 'react-native';
import SetupStyle from './style.js';


export default function SetupTemplate() {
    return (
        
        <View style={SetupStyle.container}>
                <View style={SetupStyle.containerLogo}>
                    <Image
                        style={SetupStyle.tinyLogo}
                        resizeMode="contain"
                        source={require('../../../assets/logoTipoSVGMasPNG.png')}
                    />
                </View>
            

            <View style={SetupStyle.container}>
                <Text style={[SetupStyle.fucshia, SetupStyle.title]} >Fuchsia</Text>
            </View>
            
        </View>
    );
}
