import * as React from 'react';
import { Image, Text, View } from 'react-native';
import SetupStyle from './style.js';
//Mateus Seiboth 30/03/2023 - Issue #11 - Template do Setup
export default function SetupTemplate(props) {
    return (
        <View style={SetupStyle.container}>
            <View style={SetupStyle.containerSetup}>
                <Image
                    style={SetupStyle.tinyLogo}
                    resizeMode="contain"
                    source={require('../../../assets/logoTipoSVGMasPNG.png')}
                />

                <View style={SetupStyle.seta}></View>
                <View style={SetupStyle.bolinha}></View>
                <View style={SetupStyle.seta}></View>
                <View style={SetupStyle.bolinhaVazia}></View>
                <View style={SetupStyle.seta}></View>
                <View style={SetupStyle.bolinhaVazia}></View>
            </View>

            <View >
                <Text style={SetupStyle.title}>
                    {props.titulo}
                </Text>
            </View>



        </View>
    );
}
