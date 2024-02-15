import { View, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Avatar, IconButton, Text, useTheme } from 'react-native-paper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppInputField from '../../../components/general/AppInputField'
import AppButton from '../../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import GradientBackground from '../../../components/general/GradientBackground'
export default function Tracking() {
    const navigation = useNavigation()
    const { spacing, colors } = useTheme()
    const [TrackingNumber, setTrackingNumber] = useState('#KAHSF673')

    function onStartTrackingHandler() {
        navigation.navigate('StartTracking')
    }

    return (
        <View style={{ flex: 1, rowGap: spacing.sm }}>
            <GradientBackground style={{
                flex: 0.8, rowGap: spacing.sm,
                paddingTop: StatusBar.currentHeight,
                paddingHorizontal: spacing.sm
            }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <MaterialCommunityIcons size={spacing.sm}
                        style={{ margin: 0 }}
                        name={'menu'}
                        color={colors.background}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                    <Text style={{ color: colors.background, fontWeight: '800' }} variant='titleLarge'>Bharat</Text>
                    <Avatar.Image size={spacing.sm + 10} source={require('../../../assets/images/icons/head.png')} />
                </View>
                <View style={{ rowGap: spacing.sm * 2, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', rowGap: spacing.sm }}>
                        <Text style={{ color: colors.background }} variant='bodyMedium'>Hello Sooraj,</Text>
                        <Text style={{ color: colors.background }} variant='titleLarge'>Deliver on Time</Text>
                        <Text style={{ color: colors.background }} variant='bodyMedium'> and get Great Rewards</Text>
                    </View>
                    <View style={{ rowGap: spacing.sm, alignItems: 'center' }}>
                        <Text variant='bodyMedium' style={{ color: colors.background }}>Showing deliveries at your preferred Location</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                            <IconButton iconColor={colors.error} icon={'map-marker'} />
                            <Text variant='bodyMedium' style={{ color: colors.background }}>C-32, F block, Sector 40, Noida</Text>
                            <IconButton iconColor={colors.background} icon={'arrow-down'} />
                        </View>
                        <View style={{ columnGap: spacing.sm, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
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
            </GradientBackground>

            <ImageBackground
                resizeMode='contain'
                source={require('../../../assets/background/Group.png')}
                style={{ flex: 1, paddingHorizontal: spacing.sm, justifyContent: 'center' }}>
                <AppButton
                    label={'5 Deliveries Available'}
                    onPress={() => navigation.navigate('AvailableDelivery')}
                    ButtonStyle={{ marginTop: spacing.sm * 3 }}
                />
            </ImageBackground>

        </View>
    )
}