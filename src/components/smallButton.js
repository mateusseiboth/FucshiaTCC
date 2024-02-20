import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { FontFamily, Color } from '../../GlobalStyles';

export default function SmallButton(props) {
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
        <View>
            <Animated.View style={animatedButtonStyle}>
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
            </Animated.View>
            <View style={backgroundStyles} />
        </View>
    );
}

const baseButtonStyle = {
    borderRadius: 20,
    width: 150,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
};

const baseBackgroundStyle = {
    borderRadius: 20,
    width: 150,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: -1,
    marginTop: 5,
};

const styles = StyleSheet.create({
    background: {
        ...baseBackgroundStyle,
        backgroundColor: Color.colorFuchsiaShadow,
    },
    backgroundSecondary: {
        ...baseBackgroundStyle,
        backgroundColor: Color.colorSmoke,
    },
    button: {
        ...baseButtonStyle,
        backgroundColor: Color.colorFuchsia,
        borderWidth: 1,
        borderColor: Color.colorFuchsiaShadow,
    },
    buttonSecondary: {
        ...baseButtonStyle,
        backgroundColor: Color.colorWhite,
        borderWidth: 1,
        borderColor: Color.colorSmoke,
    },
    disabledButton: {
        backgroundColor: Color.colorDisabled,
        borderWidth: 1,
        borderColor: Color.colorDisabledShadow,
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
});
