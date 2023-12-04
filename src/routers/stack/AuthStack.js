import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'

export default function AuthStack() {
    const Stack = createNativeStackNavigator()
    const { colors, fonts } = useTheme()


    return (
        <Stack.Navigator screenOptions={{
            contentStyle: { backgroundColor: colors.background },
            statusBarTranslucent: true,
            statusBarStyle: 'dark',
            statusBarColor: 'transparent',
            headerShadowVisible: false,
            animation: 'flip',
            statusBarAnimation: 'slide',
            headerStyle: { backgroundColor: colors.background },
            headerTitleStyle: { fontWeight: 'bold', fontSize: fonts.titleLarge.fontSize },
            headerTitleAlign: "center",
            headerTintColor: colors.primary
        }}>

        </Stack.Navigator>
    )
}