import { Alert, Image, ScrollView, StatusBar, StyleSheet, ToastAndroid, View, useColorScheme } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput, Text, Button, useTheme, IconButton } from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function Register() {
    const { userRegister, RegisterLoading } = useContext(AuthContext)
    const navigation = useNavigation()

    const { colors, fonts, mainPadding } = useTheme()
    const [Fullname, setFullname] = useState('SatyaXcode')
    const [Email, setEmail] = useState('SatyaXcode@gmail.com')
    const [MobileNumber, setMobileNumber] = useState('9695949392')
    const [Password, setPassword] = useState('12345678')
    const [ConfirmPassword, setConfirmPassword] = useState('12345678')

    async function onRegisterHandler() {
        if (Email.length == 0 || Password.length == 0 || Fullname.length == 0 || MobileNumber.length == 0) {
            ToastAndroid.showWithGravity(
                'all field should be filled',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        } else {
            // const deviceToken = await AsyncStorage.getItem('FcmToken')
            userRegister(Fullname, Email, Password, MobileNumber)
        }
    }

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: mainPadding }} >
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                mode='contained'
                style={{ margin: 0, padding: 0, marginTop: StatusBar.currentHeight }}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ rowGap: mainPadding }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ color: colors.primary }} variant='headlineLarge'>Register</Text>
                        <Text style={{ color: colors.primary }} variant='bodyMedium'>Create an account</Text>
                    </View>
                    <AppInputField
                        labelText={'Full name'}
                        value={Fullname}
                        onChangeText={(val) => setFullname(val)}
                    />
                    <AppInputField
                        labelText={'Mobile number'}
                        LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                        value={MobileNumber}
                        onChangeText={(val) => setMobileNumber(val)}
                        keyboardType='phone-pad'
                    />
                    <AppInputField
                        labelText={'Email'}
                        // LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                        value={Email}
                        onChangeText={(val) => setEmail(val)}
                        keyboardType='email-address'
                    />

                    <AppInputField
                        labelText={'Password'}
                        RightContent={<IconButton icon={'eye'} onPress={{}} iconColor={colors.background} style={{ margin: 0, padding: 0 }} />}
                        value={Password}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />
                    <AppInputField
                        labelText={'Confirm Password'}
                        RightContent={<IconButton icon={'eye'} onPress={{}} iconColor={colors.background} style={{ margin: 0, padding: 0 }} />}
                        value={ConfirmPassword}
                        onChangeText={(val) => setConfirmPassword(val)}
                        secureTextEntry={true}
                    />
                    <View style={{ marginTop: heightPercentageToDP(1), rowGap: mainPadding, justifyContent: 'center' }}>
                        <AppButton
                            label={'Register'}
                            onPress={onRegisterHandler}
                        // loading={LoginLoading ? true : false}
                        // disabled={LoginLoading ? true : false}
                        />
                        <View style={{ justifyContent: 'center', flexDirection: 'row', columnGap: heightPercentageToDP(0.5), alignItems: 'center' }}>
                            <Text style={{ color: colors.primary }} variant='bodyMedium' >Already have an account?</Text>
                            <Text style={{ color: colors.primary }} onPress={() => navigation.goBack()} variant='labelLarge'>Login</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )

}


const styles = StyleSheet.create({

    img: {
        height: undefined,
        alignSelf: 'center',
        // zIndex: -1
    },


})