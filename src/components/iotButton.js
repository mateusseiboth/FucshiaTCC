import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { FontFamily, Color } from '../../GlobalStyles';

export default function IotButton(props) {
    const [animation] = useState(new Animated.Value(0));

    const handlePressIn = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }).start();
    };

    const animatedButtonStyle = {
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5],
                }),
            },
        ],
    };

    const getButtonStyles = () => {
        const { type, disabled } = props;
        const buttonStyles = [styles.button];
        const backgroundStyles = [styles.background];
        const buttonText = [styles.textButton];

        if (type === 'secondary') {
            buttonStyles.push(styles.buttonSecondary);
            backgroundStyles.push(styles.backgroundSecondary);
            buttonText.push(styles.textButtonSecondary);
        }

        if (disabled) {
            buttonStyles.push(styles.disabledButton);
            backgroundStyles.push(styles.disabledBackground);
            buttonText.push(styles.disabledText);
        }

        return { buttonStyles, backgroundStyles, buttonText };
    };

    const { buttonStyles, backgroundStyles, buttonText } = getButtonStyles();

    return (
        <Animated.View style={animatedButtonStyle}>
            <View style={styles.itens}>
                <Text style={[styles.title, { backgroundColor: props.bgColor,}]}>{props.title}</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    style={buttonStyles}
                    onPress={props.onPress}
                    disabled={props.disabled}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Text style={buttonText}>{props.text ? props.text : props.children}</Text>
                </TouchableOpacity>

                <View style={backgroundStyles} />
            </View>
        </Animated.View>
    );
}

const baseButtonStyle = {
    width: "60%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center',
};

const styles = StyleSheet.create({
    button: {
        ...baseButtonStyle,
        backgroundColor: Color.colorFuchsia,
    },
    buttonSecondary: {
        ...baseButtonStyle,
        backgroundColor: Color.colorWhite,
    },
    disabledButton: {
        backgroundColor: Color.colorDisabled,
    },
    disabledBackground: {
        opacity: 1,
        backgroundColor: Color.colorDisabledShadow,
    },
    disabledText: {
        color: Color.colorGray_100,
    },
    textButton: {
        color: Color.colorWhite,
        fontFamily: FontFamily.montserratBold,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textButtonSecondary: {
        color: Color.colorFuchsia,
        fontFamily: FontFamily.montserratBold,
        fontSize: 16,
        fontWeight: 'bold',
    },
    itens: {
        zIndex: 4,
        width: 150,
        height: 150,
        margin: 10,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 15,
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: "#FFFFFF",
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});
