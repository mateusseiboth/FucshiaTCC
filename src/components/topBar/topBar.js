import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function FucshiaBar(props) {
    const navigation = useNavigation();

    const styles1 = StyleSheet.create({
        topBar: {
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            zIndex: 4,
            backgroundColor: props.color,
        },
        topBarLeft: {
            alignItems: 'flex-start',
        },
        topBarRight: {
            flex: 1,
            alignItems: 'center',

        },
        title: {
            width: "100%",
            textAlign: 'center',
           
            color: '#FFFFFF',
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
        },
        icons: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        },
    });

    return (
        <View>
            <View style={[styles1.topBar]} elevation={5}>
                
                <View style={styles1.topBarLeft}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}}>
                    <Text> <Icon style={styles1.icons}
                            name="arrow-left-bold-circle-outline"
                            size={60}
                            color="#FFFFFF"
                        /></Text>
                     </TouchableOpacity>
                </View>
               
                <View style={styles1.topBarRight}>
                    <Text style={styles1.title}>{props.title}</Text>
                </View>
            </View>
        </View>
    );
}