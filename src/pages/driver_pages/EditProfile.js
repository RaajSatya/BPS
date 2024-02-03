import { Image, StatusBar, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { useTheme, Text, IconButton } from 'react-native-paper'
import AppHeader from '../../components/general/AppHeader'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function EditProfile() {
    const navigation = useNavigation()
    const { mainPadding, colors } = useTheme()
    return (
        <View style={{ flex: 1, rowGap: mainPadding, paddingHorizontal: mainPadding }}>
            {/* <AppHeader onPress={() => navigation.goBack()} /> */}
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                mode='contained'
                style={{ marginTop: StatusBar.currentHeight, margin: 0, padding: 0 }}
            />
            <View style={{ rowGap: mainPadding }}>
                <Text style={{ textAlign: "center", color: colors.primary }} variant='headlineMedium'>Edit Profile</Text>
                <View style={{ alignSelf: 'center', borderWidth: 2, backgroundColor: colors.secondary, justifyContent: 'center', alignItems: 'center', borderColor: colors.primary, borderRadius: heightPercentageToDP(16), height: heightPercentageToDP(16), width: widthPercentageToDP(32) }}>
                    <Image style={{ alignSelf: 'center', height: heightPercentageToDP(15), width: widthPercentageToDP(30) }} source={require('../../assets/images/icons/head.png')} />
                    <IconButton onPress={() => navigation.navigate('EditProfile')} size={mainPadding} style={{ position: 'absolute', bottom: -10, right: 0 }} mode='contained' icon={'pencil'} />
                </View>
                <AppInputField
                    labelText={'Full name'}
                    value={'SoorajXcode'}
                />
                <AppInputField
                    labelText={'Mobile number'}
                    value={'93479734'}
                />
                <AppInputField
                    labelText={'Email'}
                    value={'Satyaxcode@gmail.com'}
                />
                <AppButton label={'Save'} />
                <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>Change Mobile Number</Text>
                <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>Change Password</Text>
            </View>
        </View>
    )
}