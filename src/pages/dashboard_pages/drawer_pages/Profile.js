import { Image, StatusBar, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../../../components/general/AppHeader'
import { useTheme, Text, Avatar, IconButton, Card, TouchableRipple } from 'react-native-paper'
import AppInputField from '../../../components/general/AppInputField'
import AppButton from '../../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { he } from 'date-fns/locale'

export default function Profile() {
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
                <Text style={{ textAlign: "center", color: colors.primary }} variant='headlineMedium'>Profile</Text>
                <View style={{
                    alignSelf: 'center',
                }}
                >
                    <TouchableRipple
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Avatar.Image
                            style={{
                                backgroundColor: colors.elevation.level2,
                                borderWidth: 2,
                                borderColor: colors.primary,
                                height: widthPercentageToDP(30),
                                borderRadius: heightPercentageToDP(15),
                                width: heightPercentageToDP(15),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            size={widthPercentageToDP(25)}
                            source={require('../../../assets/images/icons/head.png')} />
                    </TouchableRipple>


                    <IconButton onPress={() => navigation.navigate('EditProfile')} size={spacing.sm} style={{ position: 'absolute', bottom: -10, right: 0 }} mode='contained' icon={'pencil'} />
                </View>
                {/* <Image style={{ alignSelf: 'center' }}  /> */}
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
                <AppButton label={'Edit'}
                    ButtonContentStyle={{
                        paddingVertical: spacing.xs
                    }}
                />
                <Text variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>Change Mobile Number</Text>
                <Text onPress={() => navigation.navigate('ChangePassword')} variant='bodyLarge' style={{ textAlign: 'center', color: colors.primary, fontWeight: "800" }}>Change Password</Text>
            </View>
        </View>
    )
}