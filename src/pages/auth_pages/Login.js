import { Alert, Image, ScrollView, StyleSheet, TextInput, ToastAndroid, View, useColorScheme } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useTheme, Text, Button, ActivityIndicator, TouchableRipple, IconButton, Surface, Avatar, RadioButton } from 'react-native-paper'
import { AuthContext } from '../../context/AuthContext';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppButton from '../../components/general/AppButton';
import SocialLoginButton from '../../components/general/SocialLoginButton';
import AppInputField from '../../components/general/AppInputField';
const Login = ({ navigation }) => {
    const { LoginLoading, userSignIn } = useContext(AuthContext)
    const { colors, fonts, roundness, spacing } = useTheme()
    const [Phone, setPhone] = useState('9695949392')
    const [Password, setPassword] = useState('Fake@123')
    const [value, setValue] = useState('User');

    function onLoginHandler() {
        if (Phone.length == 0 || Password.length == 0) {
            ToastAndroid.showWithGravity(
                'fill Phone or passowrd',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        } else {
            userSignIn(value)
            // if admin navigate to  OtpVerification
            // navigation.navigate('OtpVerification')

        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: spacing.sm }} >
            {/* <LinearGradient colors={[colors.primary, colors.tertiary, colors.error]} style={StyleSheet.absoluteFillObject} /> */}

            {/* <Image blurRadius={spacing * 2}
                style={StyleSheet.absoluteFillObject}
                source={require('../../assets/background/w1.jpg')}
            /> */}
            {/* <MyAlert error={authError != null ? true : false} onDismiss={onDismissDialog} visible={visible} message={authError?.message} /> */}

            <ScrollView style={{}} contentContainerStyle={{ flexGrow: 1, rowGap: spacing.sm, justifyContent: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: colors.primary }} variant='headlineLarge'>Login</Text>
                    <Text style={{ color: colors.primary }} variant='bodyMedium'>Access account</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', columnGap: spacing.sm }}>
                    <SocialLoginButton iconName={'facebook'} />
                    <SocialLoginButton iconName={'google'} />
                </View>
                <Text style={{ textAlign: 'center', color: colors.primary }} variant='bodyMedium'>Or login with email</Text>
                <View style={{ rowGap: spacing.sm }}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text>User</Text>
                                <RadioButton value="User" />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text>Driver</Text>
                                <RadioButton value="Driver" />
                            </View>
                        </View>
                    </RadioButton.Group>
                    <AppInputField
                        labelText={'Registered mobile number'}
                        LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                        value={Phone}
                        onChangeText={(val) => setPhone(val)}
                        keyboardType='phone-pad'
                    />
                    <AppInputField
                        labelText={'Password'}
                        RightContent={<IconButton icon={'eye'} onPress={{}} iconColor={colors.background} style={{ margin: 0, padding: 0 }} />}
                        value={Password}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />

                    <View style={{ rowGap: spacing.sm, marginTop: heightPercentageToDP(1) }}>
                        <AppButton
                            label={'Sign In'}
                            onPress={onLoginHandler}
                            loading={LoginLoading ? true : false}
                            disabled={LoginLoading ? true : false}
                        />
                        <View style={{ justifyContent: 'center', flexDirection: 'row', columnGap: heightPercentageToDP(0.5), alignItems: 'center' }}>
                            <Text style={{ color: colors.primary }} variant='bodyMedium' >Don't have an account?</Text>
                            <Text style={{ color: colors.primary }} onPress={() => navigation.navigate('Register')} variant='labelLarge'>Register</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </ScrollView>
    )
}

export default Login

