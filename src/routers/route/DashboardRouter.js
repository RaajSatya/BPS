import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import DrawerStack from '../../stacks/DrawerStack'
import History from '../../pages/dashboard_pages/drawer_pages/History'
import Profile from '../../pages/dashboard_pages/drawer_pages/Profile'
import HelpSupport from '../../pages/dashboard_pages/drawer_pages/HelpSupport'
import StartTracking from '../../pages/dashboard_pages/StartTracking'
import EditProfile from '../../pages/dashboard_pages/EditProfile'
import ChangePassword from '../../pages/dashboard_pages/ChangePassword'
import BookServices from '../../pages/dashboard_pages/BookServices'

export default function DashboardRouter() {
    const Stack = createNativeStackNavigator()
    const { colors, fonts } = useTheme()

    return (
        <Stack.Navigator initialRouteName='AppDrawer' screenOptions={{
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
            <Stack.Screen name='StartTracking' options={{ headerShown: false }} component={StartTracking} />
            <Stack.Screen name='EditProfile' options={{ headerShown: false }} component={EditProfile} />
            <Stack.Screen name='ChangePassword' options={{ headerShown: false }} component={ChangePassword} />
            <Stack.Screen name='BookServices' options={{ headerShown: false }} component={BookServices} />

        </Stack.Navigator>
    )
}