import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import Login from '../../screens/auth_screen/Login'
import Register from '../../screens/auth_screen/Register'
import OtpVerification from '../../screens/auth_screen/OtpVerification'
import InputOtp from '../../screens/auth_screen/InputOtp'
import Splash from '../../screens/Startup/Splash'

export default function MainStack() {
    const Stack = createNativeStackNavigator()
    const { colors, fonts } = useTheme()
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{
            contentStyle: { backgroundColor: colors.background },
            statusBarTranslucent: true,
            statusBarStyle: 'dark',
            statusBarColor: 'transparent'
        }}>
            <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
            <Stack.Screen name='Register' options={{ headerShown: false }} component={Register} />
            <Stack.Screen name='OtpVerification' options={{ headerShown: false }} component={OtpVerification} />
            <Stack.Screen name='InputOtp' options={{ headerShown: false }} component={InputOtp} />
            <Stack.Screen name='Splash' options={{ headerShown: false }} component={Splash} />
        </Stack.Navigator>
    )
}