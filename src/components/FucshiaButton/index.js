import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontFamily, Color } from '../../../GlobalStyles';

//export const ANIM_CONFIG = { duration: 80, useNativeDriver: true };

export default function FuchsiaButton(props) {
    const getButtonStyles = () => {
        const { type, disabled } = props;
        const buttonStyles = [styles.button];
        const backgroundStyles = [styles.background];
        const buttonText = [styles.textButton]

        if (type === "secondary") {
            buttonStyles.push(styles.buttonSecondary);
            backgroundStyles.push(styles.backgroundSecondary);
            buttonText.push(styles.textButtonSecondary);
        }

        if (disabled) {
            buttonStyles.push(styles.disabled);
            backgroundStyles.push(styles.disabled);
        }

        return { buttonStyles, backgroundStyles, buttonText };
    };

    const { buttonStyles, backgroundStyles, buttonText } = getButtonStyles();

    return (
        <View>
            <TouchableOpacity
                style={buttonStyles}
                onPress={props.onPress}
                disabled={props.disabled}
            >
                <Text style={buttonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
            <View style={backgroundStyles} />
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: Color.colorFuchsiaShadow,
        borderRadius: 20,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    backgroundSecondary: {
        backgroundColor: Color.colorSmoke,
        borderRadius: 20,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    button: {
        backgroundColor: Color.colorFuchsia,
        borderRadius: 20,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Color.colorFuchsiaShadow,
    },
    buttonSecondary: {
        backgroundColor: Color.colorWhite,
        borderRadius: 20,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Color.colorSmoke,
    },
    disabled: {
        opacity: 0.3
    },
    textButton: {
        color: Color.colorWhite,
        fontFamily: FontFamily.montserratBold,
        fontSize: 16,
        fontWeight: "bold",
    },
    textButtonSecondary: {
        color: Color.colorFuchsia,
        fontFamily: FontFamily.montserratBold,
        fontSize: 16,
        fontWeight: "bold",
    }
});
