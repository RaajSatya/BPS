import { Alert, Image, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon, Text, TouchableRipple, useTheme } from 'react-native-paper'
import DriverAppBar from '../../components/driver_component/DriverAppBar'
import GradientBackground from '../../components/general/GradientBackground'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import AppInputField from '../../components/general/AppInputField'

export default function MapDetails() {
    const { spacing, roundness, colors } = useTheme()
    const [ContactPerson, setContactPerson] = useState('Sooraj Xcode')
    const [ContactNumber, setContactNumber] = useState('934893238')
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
                            {/* <TouchableRipple style={{ backgroundColor: colors.elevation.level2, borderRadius: roundness }} onPress={() => navigation.navigate('PickedUpDetails')}>
                                <View style={{ padding: spacing.xs, borderRadius: roundness, flexDirection: "row", columnGap: spacing.xs, alignItems: 'center' }}>
                                    <Text>Details</Text>
                                    <Icon source={'arrow-right'} size={spacing.sm} />
                                </View>
                            </TouchableRipple> */}
                        </View>
                        <TouchableRipple style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: roundness, padding: spacing.sm, backgroundColor: colors.primaryContainer }}>
                            <Image source={require('../../assets/images/icons/lgMap.png')} />
                        </TouchableRipple>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}} variant='titleSmall'>Time left for Pick-up</Text>
                            <Text style={{}} variant='titleSmall'>15 : 30 minutes</Text>
                        </View>
                        <ScrollView style={{ height: 200 }} contentContainerStyle={{ rowGap: spacing.sm }}>

                            <AppInputField
                                labelText={'Contact Person'}
                                // LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                                value={ContactPerson}
                                onChangeText={(val) => setContactPerson(val)}
                            // keyboardType='email-address'
                            />
                            <AppInputField
                                labelText={'Contact Number'}
                                LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                                value={ContactNumber}
                                onChangeText={(val) => setContactNumber(val)}
                            // keyboardType='email-address'
                            />
                            <View style={{ rowGap: spacing.sm }} >
                                <Text variant='bodyMedium' style={{ color: colors.primary }}>Digital Signature</Text>
                                <View style={{ borderRadius: roundness, backgroundColor: colors.primary, height: heightPercentageToDP(20) }}>
                                </View>
                            </View>
                        </ScrollView>
                        <AppButton
                            onPress={() => Alert.alert('nothing')}
                            ButtonStyle={{}}
                            ButtonContentStyle={{ paddingVertical: heightPercentageToDP(0.5) }}
                            label={'Done'}
                        />

                    </Card.Content>
                </Card>
            </View>
        </View >
    )
}