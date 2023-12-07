import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tracking from '../pages/dashboard_pages/drawer_pages/Tracking';
import CustomDrawerContent from './CustomDrawerContent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper';
import History from '../pages/dashboard_pages/drawer_pages/History';
import Profile from '../pages/dashboard_pages/drawer_pages/Profile';
import HelpSupport from '../pages/dashboard_pages/drawer_pages/HelpSupport';
export default function DrawerStack() {
    const Drawer = createDrawerNavigator();
    const { mainPadding, colors, fonts } = useTheme()
    return (
        <Drawer.Navigator
            defaultStatus='open'
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
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        // initialRouteName='Status World'
        // backBehavior='initialRoute'
        >
            <Drawer.Screen name="Tracking" options={{
                headerShown: false,
                drawerIcon: () => <MaterialCommunityIcons size={mainPadding} name='map-marker-path' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={Tracking} />
            <Drawer.Screen name="History" options={{
                drawerIcon: () => <MaterialCommunityIcons size={mainPadding} name='history' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={History} />
            <Drawer.Screen name="Profile" options={{
                drawerIcon: () => <MaterialCommunityIcons size={mainPadding} name='account-outline' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={Profile} />
            <Drawer.Screen name="HelpSupport" options={{
                drawerIcon: () => <MaterialCommunityIcons size={mainPadding} name='help-circle-outline' />,
                // drawerLabelStyle: { color: colors.background }
            }} component={HelpSupport} />
        </Drawer.Navigator>
    )
}