import { Image, View } from 'react-native'
import React from 'react'
import { useTheme, Text, IconButton, TouchableRipple, Icon, Surface } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../../../components/general/AppHeader'
import GradientBackground from '../../../components/general/GradientBackground'
import DriverAppBar from '../../../components/driver_component/DriverAppBar'

export default function History() {
    const { spacing, roundness, colors } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <GradientBackground style={{ flex: 0.13, paddingHorizontal: spacing.sm }}>
                <DriverAppBar />
            </GradientBackground>
            <View style={{ flex: 1, rowGap: spacing.sm, paddingHorizontal: spacing.sm }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text variant='bodyMedium'>History</Text>
                    <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('MapDetails')}>
                        <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                            <Text>Sort By</Text>
                            <Icon source={'arrow-right'} size={spacing.sm} />
                        </View>
                    </TouchableRipple>
                </View>
                <Text variant='titleMedium'>Today</Text>
                <Surface style={{ rowGap: spacing.sm, padding: spacing.sm, borderRadius: roundness + roundness }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text variant='titleMedium'>Booking ID : #1234</Text>
                        <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('HistoryDetails')}>
                            <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                <Text>Details</Text>
                                <Icon source={'arrow-right'} size={spacing.sm} />
                            </View>
                        </TouchableRipple>
                    </View>
                    <View style={{ padding: spacing.sm, backgroundColor: colors.elevation.level2, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, rowGap: spacing.sm }}>
                            <Text variant='bodyMedium'>From : C-32, F block, Sector 40, Noida</Text>
                            <Text variant='bodyMedium'>To : A-56, G block, Sector 110, Greater Noida</Text>
                        </View>
                        <View style={{ flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../../assets/images/map.png')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, rowGap: spacing.sm }}>
                            <Text variant='bodyMedium'>Distance : 40 KM</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{}} variant='bodyMedium'>Pickup : 10:10 AM</Text>
                        <Text style={{}} variant='bodyMedium'>Delivery : 03:30 PM</Text>
                    </View>
                </Surface>
                <Text variant='titleMedium'>Yesterday</Text>
                <Surface style={{ rowGap: spacing.sm, padding: spacing.sm, borderRadius: roundness + roundness }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text variant='titleMedium'>Booking ID : #1234</Text>
                        <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('HistoryDetails')}>
                            <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                <Text>Details</Text>
                                <Icon source={'arrow-right'} size={spacing.sm} />
                            </View>
                        </TouchableRipple>
                    </View>
                    <View style={{ padding: spacing.sm, backgroundColor: colors.elevation.level2, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, rowGap: spacing.sm }}>
                            <Text variant='bodyMedium'>From : C-32, F block, Sector 40, Noida</Text>
                            <Text variant='bodyMedium'>To : A-56, G block, Sector 110, Greater Noida</Text>
                        </View>
                        <View style={{ flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../../assets/images/map.png')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, rowGap: spacing.sm }}>
                            <Text variant='bodyMedium'>Distance : 40 KM</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{}} variant='bodyMedium'>Pickup : 10:10 AM</Text>
                        <Text style={{}} variant='bodyMedium'>Delivery : 03:30 PM</Text>
                    </View>
                </Surface>
            </View>
        </View>
    )
}