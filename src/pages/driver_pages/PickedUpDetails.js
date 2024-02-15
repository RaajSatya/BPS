import { Image, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text, TouchableRipple, useTheme } from 'react-native-paper'
import DriverAppBar from '../../components/driver_component/DriverAppBar'
import GradientBackground from '../../components/general/GradientBackground'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function PickedUpDetails() {
    const { spacing, roundness, colors } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <GradientBackground style={{ flex: 0.13, paddingHorizontal: spacing.sm }}>
                <DriverAppBar />
            </GradientBackground>
            <View style={{ flex: 1, padding: spacing.sm }}>
                <Card>
                    <Card.Content style={{ rowGap: spacing.sm }}>
                        <View>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text variant='titleSmall'>Booking ID : #1234</Text>
                                <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('MapDetails')}>
                                    <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                        <Text>Map</Text>
                                        <Icon source={'arrow-right'} size={spacing.sm} />
                                    </View>
                                </TouchableRipple>
                            </View>
                            <Text variant='bodyMedium' style={{ fontWeight: "bold" }}>Sender’s Details:</Text>
                            <Text variant='bodyMedium'>Name : Rohit Maurya</Text>
                            <Text variant='bodyMedium'>Contact Num : 7017866148</Text>
                            <Text variant='bodyMedium'>Email ID : rohitmaurya@gmail.com</Text>
                        </View>
                        <View>
                            <Text variant='titleMedium'>Booking ID : #1234</Text>
                            <Text variant='bodyMedium' style={{ fontWeight: "bold" }}>Receiver’s Details:</Text>
                            <Text variant='bodyMedium'>Name : Sooraj Xcode</Text>
                            <Text variant='bodyMedium'>Contact Num : 9893434837</Text>
                            <Text variant='bodyMedium'>Email ID : SatyaXcode@gmail.com</Text>
                        </View>
                        <View style={{ padding: spacing.sm, backgroundColor: colors.elevation.level2, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flex: 1, rowGap: spacing.sm }}>
                                <Text variant='bodyMedium'>From : C-32, F block, Sector 40, Noida</Text>
                                <Text variant='bodyMedium'>To : A-56, G block, Sector 110, Greater Noida</Text>
                            </View>
                            <View style={{ flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/map.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flex: 1, rowGap: spacing.sm }}>
                                <Text variant='bodyMedium'>Distance : 40 KM</Text>
                            </View>
                            <View style={{ backgroundColor: colors.primary, padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                <Text style={{ color: colors.background }} variant='bodyMedium'>Call</Text>
                                <Icon color={colors.background} source={'phone'} size={spacing.sm} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}} variant='bodyMedium'>Pickup : 10:10 AM</Text>
                            <Text style={{}} variant='bodyMedium'>Delivery : 03:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}} variant='titleSmall'>Time left for Pick-up</Text>
                            <Text style={{}} variant='titleSmall'>15 : 30 minutes</Text>
                        </View>
                        <AppButton
                            onPress={() => navigation.navigate('StartPickup')}
                            ButtonStyle={{}}
                            ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                            label={'Picked Up'}
                        />
                        <AppButton
                            onPress={() => navigation.navigate('StartPickup')}
                            ButtonStyle={{ backgroundColor: colors.primaryContainer }}
                            ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                            label={'Delivered'}
                        />
                    </Card.Content>
                </Card>
            </View>
        </View>
    )
}