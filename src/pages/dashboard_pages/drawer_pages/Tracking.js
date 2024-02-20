import { View, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Icon, IconButton, Text, TouchableRipple, useTheme } from 'react-native-paper'
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
            {/* <ImageBackground style={{ flex: 0.9, rowGap: spacing.sm, paddingTop: StatusBar.currentHeight, paddingHorizontal: spacing.sm }} source={require('../../../assets/images/icons/Rectangle1.png')}> */}
            <GradientBackground style={{
                flex: 0.8, rowGap: spacing.sm,
                paddingTop: StatusBar.currentHeight,
                paddingHorizontal: spacing.sm
            }}>


                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <TouchableRipple
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    >
                        <Icon
                            source={'menu'}
                            size={spacing.md}
                            color={colors.background}
                        />
                    </TouchableRipple>
                    <Text style={{ color: colors.background, fontWeight: '800' }} variant='titleLarge'>Bharat</Text>
                    <TouchableRipple
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Avatar.Image
                            style={{
                                backgroundColor: colors.elevation.level2,
                                borderWidth: 2,
                                borderColor: colors.scrim,
                                height: widthPercentageToDP(10),
                                borderRadius: heightPercentageToDP(5),
                                width: heightPercentageToDP(5),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            size={widthPercentageToDP(8)}
                            source={require('../../../assets/images/icons/head.png')} />
                    </TouchableRipple>

                </View>
                <View style={{ rowGap: spacing.sm * 2, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', rowGap: spacing.sm }}>
                        <Text style={{ color: colors.background }} variant='bodyMedium'>Hello Sooraj,</Text>
                        <Text style={{ color: colors.background }} variant='titleLarge'>Track your shipment</Text>
                    </View>
                    <View style={{ rowGap: spacing.sm, alignItems: 'center' }}>
                        <Text variant='bodyMedium' style={{ color: colors.background }}>Please enter your tracking number</Text>
                        <AppInputField
                            value={TrackingNumber}
                            onChangeText={(val) => setTrackingNumber(val)}
                            BackGroundStyle={{
                                backgroundColor: colors.background,
                                width: widthPercentageToDP(60),
                                height: heightPercentageToDP(6)
                            }}
                            InputStyle={{
                                color: colors.primary
                            }}
                        />
                        <AppButton
                            label={'Start Tracking'}
                            ButtonStyle={{ width: widthPercentageToDP(60) }}
                            ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                            onPress={onStartTrackingHandler}
                        />
                    </View>
                </View>
                {/* </ImageBackground> */}
            </GradientBackground>

            <ImageBackground
                resizeMode='contain'
                source={require('../../../assets/background/Group.png')}
                style={{ flex: 1, paddingHorizontal: spacing.sm, justifyContent: 'center' }}>
                <AppButton
                    label={'Book Now'}
                    onPress={() => navigation.navigate('BookServices')}
                    ButtonStyle={{ marginTop: spacing.md }}
                    ButtonContentStyle={{
                        paddingVertical: spacing.xs
                    }}
                />
            </ImageBackground>

        </View>
    )
}