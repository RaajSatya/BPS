import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Text, useTheme } from 'react-native-paper'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {
    const navigation = useNavigation()
    const { colors, spacing } = useTheme()

    function onNextPressHandler() {
        navigation.navigate('Login')
    }

    return (
        <ImageBackground
            style={{ flex: 1, backgroundColor: 'rgba(234, 240, 255, 0.8)' }}
            source={require('../../assets/background/bg.jpg')}
            imageStyle={{ opacity: 0.2 }}
        >
            <View
                style={{ flex: 2, justifyContent: 'center', alignItems: "center" }}>
                <Text style={{
                    color: colors.primary,
                    fontWeight: '800',
                    fontStyle: 'italic',
                    letterSpacing: 2
                }}
                    variant='displayLarge'>BHARAT</Text>
                <Text
                    style={{
                        fontWeight: '800',
                        fontSize: widthPercentageToDP(5)
                    }}
                    variant='bodyLarge'>Parcel Services Pvt Ltd.</Text>
            </View>
            <ImageBackground
                source={require('../../assets/background/Ellipses.png')}
                style={{
                    flex: 1.1,
                    padding: spacing.sm,
                    justifyContent: 'center',
                    rowGap: spacing.sm,
                }}>

                <Text
                    style={{
                        fontWeight: 'bold',
                        color: colors.background,
                        fontSize: widthPercentageToDP(5),
                        textAlign: 'center'
                    }}
                    variant='titleMedium'>
                    Welcome to shipfast!
                </Text>
                <Text
                    style={{ textAlign: 'center', color: colors.background }}
                    variant='bodyMedium'
                >
                    You can send items,track and be
                    courier in this application
                </Text>

                <Button onPress={onNextPressHandler} style={{ borderRadius: 20 }}
                    labelStyle={{ color: colors.primary }}
                    mode='contained-tonal'>Next</Button>
            </ImageBackground>
        </ImageBackground>
    )
}