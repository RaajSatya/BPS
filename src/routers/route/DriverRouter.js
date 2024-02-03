import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import StartTracking from '../../pages/driver_pages/StartTracking'
import EditProfile from '../../pages/driver_pages/EditProfile'
import ChangePassword from '../../pages/driver_pages/ChangePassword'
import BookServices from '../../pages/driver_pages/BookServices'
import DriverDrawerStack from '../../stacks/driver_stack/DriverDrawerStack'
import AvailableDelivery from '../../pages/driver_pages/drawer_pages/AvailableDelivery'

export default function DriverRouter() {
    const Stack = createNativeStackNavigator()
    const { colors, fonts } = useTheme()

    return (
        <Stack.Navigator initialRouteName='DriverAppDrawer' screenOptions={{
            // contentStyle: { backgroundColor: colors.background },
            statusBarTranslucent: true,
            statusBarStyle: 'dark',
            statusBarColor: 'transparent',
            headerShadowVisible: false,
            animation: 'flip',
            statusBarAnimation: 'slide',
            // headerStyle: { backgroundColor: colors.background },
            // headerTitleStyle: { fontWeight: 'bold', fontSize: fonts.titleLarge.fontSize },
            headerTitleAlign: "center",
            // headerTintColor: colors.primary
            // headerShown: false
        }}>
            <Stack.Screen name='DriverAppDrawer' options={{ headerShown: false }} component={DriverDrawerStack} />
            <Stack.Screen name='StartTracking' options={{ headerShown: false }} component={StartTracking} />
            <Stack.Screen name='EditProfile' options={{ headerShown: false }} component={EditProfile} />
            <Stack.Screen name='ChangePassword' options={{ headerShown: false }} component={ChangePassword} />
            <Stack.Screen name='BookServices' options={{ headerShown: false }} component={BookServices} />

            <Stack.Screen name='AvailableDelivery' options={{ headerShown: false }} component={AvailableDelivery} />

        </Stack.Navigator>
    )
}