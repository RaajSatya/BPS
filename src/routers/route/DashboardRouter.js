import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import DrawerStack from '../../stacks/DrawerStack'
import History from '../../pages/dashboard_pages/drawer_pages/History'
import Profile from '../../pages/dashboard_pages/drawer_pages/Profile'
import HelpSupport from '../../pages/dashboard_pages/drawer_pages/HelpSupport'

export default function DashboardRouter() {
    const Stack = createNativeStackNavigator()
    const { colors, fonts } = useTheme()

    return (
        <Stack.Navigator screenOptions={{
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
            <Stack.Screen name='AppDrawer' options={{ headerShown: false }} component={DrawerStack} />

        </Stack.Navigator>
    )
}