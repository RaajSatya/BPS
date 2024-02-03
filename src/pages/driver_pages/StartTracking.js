import { View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Text, IconButton, useTheme, Card } from 'react-native-paper'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
import AppHeader from '../../components/general/AppHeader'
import { useNavigation } from '@react-navigation/native'
export default function StartTracking() {
    const { mainPadding, colors, radius } = useTheme()
    const navigation = useNavigation()
    const [currentPosition, setcurrentPosition] = useState(1)

    useEffect(() => {
        // if (ITEMS.order_status === 'cancled') {
        //     setcurrentPosition(3)
        // }
        // if (ITEMS.order_status === 'on the way') {
        //     setcurrentPosition(1)
        // }
    }, [])

    return (
        <View style={{ flex: 1, rowGap: mainPadding, paddingHorizontal: mainPadding }}>

            <AppHeader onPress={() => navigation.goBack()} />

            <View style={{ flex: 1 }}>
                <View style={{ rowGap: mainPadding - radius }}>
                    <Text style={{ fontWeight: "800", color: colors.primary }} variant='bodySmall'>Tracking</Text>
                    <LinearGradient colors={['#3770B5', '#748DC6']} style={{ borderRadius: radius, padding: mainPadding, rowGap: mainPadding }}>
                        <Text variant='bodySmall' style={{ color: colors.background }}>Majalengka,indonesia</Text>
                        <Text variant='bodySmall' style={{ color: colors.background }}>No,resi 2356589642</Text>
                        <View style={{ backgroundColor: colors.primary, padding: mainPadding / 2, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Text variant='titleMedium' style={{ fontWeight: '800', color: colors.background }}>-3.50 USD</Text>
                            <Text variant='labelSmall' style={{ color: colors.background }}>Our free(included)</Text>
                        </View>
                        <Text variant='titleMedium' style={{ color: colors.background }}>Berlin,germany</Text>
                        <Text variant='labelSmall' style={{ color: colors.background }}>Parcel,25kg</Text>
                    </LinearGradient>
                </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: "flex-start" }}>
                <StepIndicator
                    renderStepIndicator={({ position, stepStatus }) => {
                        return (
                            <IconButton containerColor={colors.primary} iconColor={colors.background} icon={'router'} />
                        )
                    }}
                    customStyles={{
                        stepIndicatorSize: 15,
                        stepStrokeWidth: 20,
                        labelSize: 15,

                        // currentStepStrokeWidth: 10,
                        // separatorStrokeUnfinishedWidth: 10,
                        stepStrokeUnFinishedColor: colors.primary,
                        // separatorStrokeUnfinishedWidth: 60,
                        // stepIndicatorLabelUnFinishedColor: colors.primary,
                        stepStrokeCurrentColor: colors.primary,
                        separatorFinishedColor: colors.error,

                        stepStrokeFinishedColor: colors.primary,
                        // stepIndicatorLabelFinishedColor: 'yellow',
                        stepIndicatorFinishedColor: 'green',
                        separatorStrokeFinishedWidth: 3,
                    }}
                    currentPosition={currentPosition}
                    direction='vertical'
                    // renderLabel={({ label, position }) => {
                    //     return (
                    //         <View>
                    //             <Text>{label}Hello asdda</Text>
                    //         </View>
                    //     )
                    // }}
                    labels={[
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: widthPercentageToDP(60) }}>
                                <Text variant='bodySmall' style={{ color: colors.primary, fontWeight: "800" }}>In process-recipient city,</Text>
                                <Text variant='bodySmall' style={{ color: colors.primary }} >Berlin,germany</Text>
                            </View>
                            <Text variant='bodySmall' style={{ color: colors.primary }}>11,45 PM</Text>
                        </View>,
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: widthPercentageToDP(60) }}>
                                <Text variant='bodySmall' style={{ color: colors.primary, fontWeight: "800" }}>Transite-sending city,</Text>
                                <Text variant='bodySmall' style={{ color: colors.primary }} > Jakarta,indonesia</Text>
                            </View>
                            <Text variant='bodySmall' style={{ color: colors.primary }}>11,45 PM</Text>
                        </View>,
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: widthPercentageToDP(60) }}>
                                <Text variant='bodySmall' style={{ color: colors.primary, fontWeight: "800" }}>Sent from majalengka,</Text>
                                <Text variant='bodySmall' style={{ color: colors.primary }}>Majalengka,indonesia</Text>
                            </View>
                            <Text variant='bodySmall' style={{ color: colors.primary }}>11,45 PM</Text>
                        </View>

                    ]}
                    stepCount={3}
                />

            </View>
        </View>
    )
}