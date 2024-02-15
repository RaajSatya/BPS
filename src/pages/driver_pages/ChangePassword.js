import { Image, StatusBar, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { useTheme, Text, IconButton } from 'react-native-paper'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import AppHeader from '../../components/general/AppHeader'

export default function ChangePassword() {
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
            <View style={{ rowGap: spacing.sm }}>
                <Text style={{ textAlign: "center", color: colors.primary }} variant='headlineMedium'>Change Password</Text>
                {/* <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/icons/Image.png')} /> */}
                <AppInputField
                    labelText={'Previous Password'}
                    value={'SoorajXcode'}
                />
                <AppInputField
                    labelText={'New Password'}
                    value={'93479734'}
                />
                <AppInputField
                    labelText={'Email'}
                    value={'Satyaxcode@gmail.com'}
                />
                <AppButton label={'Submit'} />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', columnGap: 5 }}>
                    <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary }}>Forget Password</Text>
                    <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>send Otp</Text>
                </View>
            </View>
        </View>
    )
}