import { View, StatusBar, ImageBackground, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Icon, IconButton, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AppHeader from '../../components/general/AppHeader'
import DriverAppBar from '../../components/driver_component/DriverAppBar'
import LinearGradient from 'react-native-linear-gradient'
import GradientBackground from '../../components/general/GradientBackground'
export default function AvailableDelivery() {
    const navigation = useNavigation()
    const { spacing, roundness, colors } = useTheme()
    const [TrackingNumber, setTrackingNumber] = useState('#KAHSF673')

    function onStartTrackingHandler() {
        navigation.navigate('StartTracking')
    }

    return (
        <View style={{ flex: 1 }}>
            <GradientBackground
                style={{
                    rowGap: spacing.sm,
                    paddingHorizontal: spacing.sm,
                }}
            >

                <DriverAppBar onPress={() => navigation.goBack()} />
                <View style={{ rowGap: spacing.sm }}>
                    <View style={{ rowGap: spacing.sm, paddingBottom: spacing.sm, alignItems: 'center' }}>
                        <Text style={{ color: colors.background }} variant='bodyMedium'>Showing deliveries at your preferred Location</Text>
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
            <View
                style={{ flex: 1 }}
            >
                <FlatList
                    data={[...Array(5)]}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ rowGap: spacing.sm, padding: spacing.sm }}
                    renderItem={({ item, index }) => {
                        return (
                            <Card key={index}>
                                <Card.Content style={{ rowGap: spacing.sm }}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text variant='titleMedium'>Booking ID : #1234</Text>
                                        <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('BookingDetails')}>
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
                                    <View style={{ columnGap: spacing.sm, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                        <AppButton
                                            label={'Accept'}
                                            ButtonStyle={{ width: widthPercentageToDP(40) }}
                                            ButtonContentStyle={{ backgroundColor: '#029C09', paddingVertical: heightPercentageToDP(0.5) }}
                                            onPress={onStartTrackingHandler}
                                        />
                                        <AppButton
                                            label={'Decline'}
                                            ButtonStyle={{ width: widthPercentageToDP(40) }}
                                            ButtonContentStyle={{ backgroundColor: colors.error, paddingVertical: heightPercentageToDP(0.5) }}
                                            onPress={onStartTrackingHandler}
                                        />
                                    </View>

                                </Card.Content>
                            </Card>
                        )
                    }}
                />
            </View>
        </View>
    )
}