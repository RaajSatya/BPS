import { Image, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { useTheme, Text, Divider, IconButton } from 'react-native-paper'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import AppHeader from '../../components/general/AppHeader'

export default function BookServices() {
    const navigation = useNavigation()
    const { spacing, colors } = useTheme()
    return (
        <View style={{ flex: 1, rowGap: spacing.sm, paddingHorizontal: spacing.sm }}>
            {/* <AppHeader onPress={() => navigation.goBack()} /> */}
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                mode='contained'
                style={{ marginTop: StatusBar.currentHeight, margin: 0, padding: 0 }}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.sm, rowGap: spacing.sm }}>
                <Text style={{ textAlign: "center", color: colors.primary }} variant='headlineMedium'>Book Services</Text>
                {/* <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/icons/Image.png')} /> */}
                <AppInputField
                    labelText={'Senders name'}
                    value={'Sooraj Xcode'}
                />
                <AppInputField
                    labelText={'Contact Number'}
                    value={'93479734'}
                />
                <AppInputField
                    labelText={'Email'}
                    value={'Satyaxcode@gmail.com'}
                />
                <AppInputField
                    labelText={'Pickup Location'}
                    value={'Locality Street Colony'}
                />
                <View style={{ flexDirection: 'row', columnGap: spacing.sm }}>
                    <AppInputField
                        containerStyle={{ flex: 1 }}
                        BackGroundStyle={{ width: '100%' }}
                        labelText={'City/Town'}
                        value={'Kasimabad'}
                    />
                    <AppInputField
                        containerStyle={{ flex: 1 }}
                        labelText={'District'}
                        value={'Ghazipur'}
                    />
                </View>
                <View style={{ columnGap: spacing.sm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AppInputField
                        containerStyle={{ flex: 1 }}
                        labelText={'State'}
                        value={'Up'}
                    />
                    <AppInputField
                        containerStyle={{ flex: 1 }}
                        labelText={'Pincode'}
                        value={'233230'}
                    />
                </View>

                <Divider />

                <View>
                    <AppInputField
                        labelText={'Receivers name'}
                        value={'Rohit Maurya'}
                    />
                    <AppInputField
                        labelText={'Contact number'}
                        value={'934859385'}
                    />
                    <AppInputField
                        labelText={'Email'}
                        value={'Rmaurya274@gmail.com'}
                    />

                    <AppInputField
                        labelText={'Drop Location'}
                        value={'Locality Street Colony'}
                    />
                    <View style={{ columnGap: spacing.sm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AppInputField
                            containerStyle={{ flex: 1 }}
                            labelText={'City/Town'}
                            value={'Kasimabad'}
                        />
                        <AppInputField
                            containerStyle={{ flex: 1 }}
                            labelText={'District'}
                            value={'Ghazipur'}
                        />
                    </View>
                    <View style={{ columnGap: spacing.sm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AppInputField
                            containerStyle={{ flex: 1 }}
                            labelText={'State'}
                            value={'Up'}
                        />
                        <AppInputField
                            containerStyle={{ flex: 1 }}
                            labelText={'Pincode'}
                            value={'233230'}
                        />
                    </View>
                </View>
                <AppButton label={'Submit'} />
                {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', columnGap: 5 }}>
                    <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary }}>Already have an account</Text>
                    <Text onPress={() => navigation.navigate('Login')} variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>Login</Text>
                </View> */}
            </ScrollView>
        </View>
    )
}