import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, ToastAndroid, TouchableWithoutFeedback, View, useColorScheme } from 'react-native'
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

    const { colors, fonts, spacing } = useTheme()
    const [Fullname, setFullname] = useState('SatyaXcode')
    const [Email, setEmail] = useState('SatyaXcode@gmail.com')
    const [MobileNumber, setMobileNumber] = useState('9695949392')
    const [Password, setPassword] = useState('12345678')
    const [ConfirmPassword, setConfirmPassword] = useState('12345678')

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                // backgroundColor: 'cyan'
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={50}
        >
            <View style={{ flex: 0.8 }}>
                <ScrollView style={{}} contentContainerStyle={{
                    // flexGrow: 1,
                    // backgroundColor: 'orange',
                    paddingHorizontal: spacing.sm,
                    paddingTop: StatusBar.currentHeight
                }}>
                    <View style={{
                        marginBottom: spacing.sm
                    }}>
                        <IconButton
                            icon={'arrow-left'}
                            iconColor={colors.primary}
                            onPress={() => navigation.goBack()}
                            mode='contained'
                            style={{ margin: 0, padding: 0 }}
                        />
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold', marginBottom: spacing.sm }}>Register</Text>
                            <Text style={{ color: colors.primary, fontSize: 16 }}>Create an account</Text>
                        </View>
                        <AppInputField
                            labelText={'Full name'}
                            value={Fullname}
                            onChangeText={(val) => setFullname(val)}
                        />
                        <AppInputField
                            labelText={'Mobile number'}
                            LeftContent={<Text style={{ color: colors.background }}>+91</Text>}
                            value={MobileNumber}
                            onChangeText={(val) => setMobileNumber(val)}
                            keyboardType='phone-pad'
                        />
                        <AppInputField
                            labelText={'Email'}
                            value={Email}
                            onChangeText={(val) => setEmail(val)}
                            keyboardType='email-address'
                        />
                        <AppInputField
                            labelText={'Password'}
                            RightContent={<IconButton icon={'eye'} onPress={() => { }} iconColor={colors.background} style={{ margin: 0, padding: 0 }} />}
                            value={Password}
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={true}
                        />
                        <AppInputField
                            labelText={'Confirm Password'}
                            RightContent={<IconButton icon={'eye'} onPress={() => { }} iconColor={colors.background} style={{ margin: 0, padding: 0 }} />}
                            value={ConfirmPassword}
                            onChangeText={(val) => setConfirmPassword(val)}
                            secureTextEntry={true}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={{ flex: 0.2, paddingHorizontal: spacing.sm }}>
                <AppButton
                    label={'Register'}
                    onPress={() => Alert.alert('ok')}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spacing.sm }}>
                    <Text style={{ color: colors.primary }}>Already have an account? </Text>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }} onPress={() => navigation.goBack()}>Login</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
