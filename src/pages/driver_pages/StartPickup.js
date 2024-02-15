import { Image, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text, TouchableRipple, useTheme } from 'react-native-paper'
import DriverAppBar from '../../components/driver_component/DriverAppBar'
import GradientBackground from '../../components/general/GradientBackground'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function StartPickup() {
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
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text variant='titleSmall'>Booking ID : #1234</Text>
                            <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('PickedUpDetails')}>
                                <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                    <Text>Details</Text>
                                    <Icon source={'arrow-right'} size={spacing.sm} />
                                </View>
                            </TouchableRipple>
                        </View>
                        <TouchableRipple style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: roundness, padding: spacing.sm, backgroundColor: colors.primaryContainer }}>
                            <Image source={require('../../assets/images/icons/lgMap.png')} />
                        </TouchableRipple>
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