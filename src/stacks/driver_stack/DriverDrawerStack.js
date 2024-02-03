import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper';
import CustomDriverDrawerContent from './CustomDriverDrawerContent';
import Tracking from '../../pages/driver_pages/drawer_pages/Tracking';
import History from '../../pages/driver_pages/drawer_pages/History';
import Profile from '../../pages/driver_pages/drawer_pages/Profile';
import HelpSupport from '../../pages/driver_pages/drawer_pages/HelpSupport';
export default function DriverDrawerStack() {
    const Drawer = createDrawerNavigator();
    const { mainPadding, colors, fonts } = useTheme()
    return (
        <Drawer.Navigator
            // defaultStatus='open'
            screenOptions={{
                swipeEdgeWidth: 60,
                drawerType: 'back',
                swipeEnabled: true,
                drawerStatusBarAnimation: 'none',
                drawerActiveTintColor: colors.primary,
                drawerActiveBackgroundColor: colors.background,
                drawerInactiveTintColor: colors.background,
                headerTitleAlign: "center",
                headerTintColor: colors.primary,
                unmountOnBlur: true
            }}
            drawerContent={(props) => <CustomDriverDrawerContent {...props} />}
        // initialRouteName='Profile'
        // backBehavior='initialRoute'
        >
            <Drawer.Screen name="Tracking" options={{
                headerShown: false,
                drawerIcon: () => <MaterialCommunityIcons size={mainPadding} name='map-marker-path' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={Tracking} />
            <Drawer.Screen name="History" options={{
                headerShown: false,
                drawerIcon: () => <MaterialCommunityIcons color={colors.background} size={mainPadding} name='history' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={History} />
            <Drawer.Screen name="Profile" options={{
                headerShown: false,
                drawerIcon: () => <MaterialCommunityIcons color={colors.background} size={mainPadding} name='account-outline' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={Profile} />
            <Drawer.Screen name="HelpSupport" options={{
                headerShown: false,
                drawerIcon: () => <MaterialCommunityIcons color={colors.background} size={mainPadding} name='help-circle-outline' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={HelpSupport} />
        </Drawer.Navigator>
    )
}