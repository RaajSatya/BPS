import { View, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Avatar, IconButton, Text, useTheme } from 'react-native-paper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppInputField from '../../../components/general/AppInputField'
import AppButton from '../../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AppHeader from '../../../components/general/AppHeader'
import DriverAppBar from '../../../components/driver_component/DriverAppBar'
export default function AvailableDelivery() {
    const navigation = useNavigation()
    const { mainPadding, colors } = useTheme()
    const [TrackingNumber, setTrackingNumber] = useState('#KAHSF673')

    function onStartTrackingHandler() {
        navigation.navigate('StartTracking')
    }

    return (
        <View style={{ flex: 1, overflow: "hidden" }}>
            <ImageBackground
                // resizeMode='contain'
                style={{
                    flex: 0.5,
                    rowGap: mainPadding,
                    paddingHorizontal: mainPadding
                }} source={require('../../../assets/images/icons/Rectangle22.png')}>
                <DriverAppBar onPress={() => navigation.goBack()} />
                <View style={{ rowGap: mainPadding * 2 }}>
                    <View style={{ rowGap: mainPadding, alignItems: 'center' }}>
                        <Text style={{ color: colors.background }} variant='bodyMedium'>Showing deliveries at your preferred Location</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                            <IconButton iconColor={colors.error} icon={'map-marker'} />
                            <Text variant='bodyMedium' style={{ color: colors.background }}>C-32, F block, Sector 40, Noida</Text>
                            <IconButton iconColor={colors.background} icon={'arrow-down'} />
                        </View>
                        <View style={{ columnGap: mainPadding, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <AppButton
                                label={'Live Location'}
                                ButtonStyle={{ width: widthPercentageToDP(40) }}
                                ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                                onPress={onStartTrackingHandler}
                            />
                            <AppButton
                                label={'Change Location'}
                                ButtonStyle={{ width: widthPercentageToDP(40) }}
                                ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                                onPress={onStartTrackingHandler}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View
                style={{ flex: 1, paddingHorizontal: mainPadding }}
            >
                <AppButton
                    label={'5 Deliveries Available'}
                    onPress={() => navigation.navigate('BookServices')}
                    ButtonStyle={{ marginTop: mainPadding * 3 }}
                />
            </View>
        </View>
    )
}