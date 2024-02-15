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
    const { spacing, colors } = useTheme()
    const [TrackingNumber, setTrackingNumber] = useState('#KAHSF673')

    function onStartTrackingHandler() {
        navigation.navigate('StartTracking')
    }

    return (
        <View style={{ flex: 1, rowGap: spacing.sm }}>
            <ImageBackground style={{ flex: 0.9, rowGap: spacing.sm, paddingTop: StatusBar.currentHeight, paddingHorizontal: spacing.sm }} source={require('../../../assets/images/icons/Rectangle1.png')}>
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
            </ImageBackground>

            <ImageBackground
                resizeMode='contain'
                source={require('../../../assets/background/Group.png')}
                style={{ flex: 1, paddingHorizontal: spacing.sm, justifyContent: 'center' }}>
                <AppButton
                    label={'Book Now'}
                    onPress={() => navigation.navigate('BookServices')}
                    ButtonStyle={{ marginTop: spacing.sm * 3 }}
                />
            </ImageBackground>

        </View>
    )
}