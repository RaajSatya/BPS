import { View, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Avatar, IconButton, Text, useTheme } from 'react-native-paper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppInputField from '../../../components/general/AppInputField'
import AppButton from '../../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
export default function Tracking() {
    const navigation = useNavigation()
    const { mainPadding, colors } = useTheme()
    const [TrackingNumber, setTrackingNumber] = useState('#KAHSF673')

    function onStartTrackingHandler() {
        navigation.navigate('StartTracking')
    }

    return (
        <View style={{ flex: 1, rowGap: mainPadding }}>
            <ImageBackground style={{ flex: 1, rowGap: mainPadding, paddingTop: StatusBar.currentHeight, paddingHorizontal: mainPadding }} source={require('../../../assets/images/icons/Rectangle1.png')}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <MaterialCommunityIcons size={mainPadding}
                        style={{ margin: 0 }}
                        name={'menu'}
                        color={colors.background}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                    <Text style={{ color: colors.background, fontWeight: '800' }} variant='titleLarge'>Bharat</Text>
                    <Avatar.Image size={mainPadding + 10} source={require('../../../assets/images/icons/head.png')} />
                </View>
                <View style={{ rowGap: mainPadding * 2, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', rowGap: mainPadding }}>
                        <Text style={{ color: colors.background }} variant='bodyMedium'>Hello Sooraj,</Text>
                        <Text style={{ color: colors.background }} variant='titleLarge'>Deliver on Time</Text>
                        <Text style={{ color: colors.background }} variant='bodyMedium'> and get Great Rewards</Text>
                    </View>
                    <View style={{ rowGap: mainPadding, alignItems: 'center' }}>
                        <Text variant='bodyMedium' style={{ color: colors.background }}>Showing deliveries at your preferred Location</Text>
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

            <ImageBackground
                resizeMode='contain'
                source={require('../../../assets/background/Group.png')}
                style={{ flex: 1, paddingHorizontal: mainPadding, justifyContent: 'center' }}>
                <AppButton
                    label={'5 Deliveries Available'}
                    onPress={() => navigation.navigate('AvailableDelivery')}
                    ButtonStyle={{ marginTop: mainPadding * 3 }}
                />
            </ImageBackground>

        </View>
    )
}