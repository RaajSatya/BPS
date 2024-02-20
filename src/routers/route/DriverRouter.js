import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import StartTracking from '../../pages/driver_pages/StartTracking'
import EditProfile from '../../pages/driver_pages/EditProfile'
import ChangePassword from '../../pages/driver_pages/ChangePassword'
import BookServices from '../../pages/driver_pages/BookServices'
import DriverDrawerStack from '../../stacks/driver_stack/DriverDrawerStack'
import BookingDetails from '../../pages/driver_pages/BookingDetails'
import AvailableDelivery from '../../pages/driver_pages/AvailableDelivery'
import StartPickup from '../../pages/driver_pages/StartPickup'
import PickedUpDetails from '../../pages/driver_pages/PickedUpDetails'
import MapDetails from '../../pages/driver_pages/MapDetails'
import HistoryDetails from '../../pages/driver_pages/HistoryDetails'

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
            <Stack.Screen name='BookingDetails' options={{ headerShown: false }} component={BookingDetails} />
            <Stack.Screen name='StartPickup' options={{ headerShown: false }} component={StartPickup} />
            <Stack.Screen name='PickedUpDetails' options={{ headerShown: false }} component={PickedUpDetails} />
            <Stack.Screen name='MapDetails' options={{ headerShown: false }} component={MapDetails} />
            <Stack.Screen name='HistoryDetails' options={{ headerShown: false }} component={HistoryDetails} />

        </Stack.Navigator>
    )
}