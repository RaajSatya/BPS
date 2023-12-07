import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { useTheme, Text, Button, IconButton } from 'react-native-paper'
import AppInputField from '../../components/general/AppInputField'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default function OtpVerification({ navigation }) {
    const { colors, mainPadding } = useTheme()
    const [Phone, setPhone] = useState('9695949392')
    const [code, setCode] = useState('123456')
    function onOtpVerificationHandler() {
        navigation.navigate('InputOtp')
    }

    const styles = StyleSheet.create({
        borderStyleBase: {
            width: 30,
            height: 45
        },

        borderStyleHighLighted: {
            borderColor: "#03DAC6",
        },

        underlineStyleBase: {
            width: 30,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 1,
        },

        underlineStyleHighLighted: {
            borderColor: "#03DAC6",
        },
    });

    return (
        <View style={{ flex: 1, paddingHorizontal: mainPadding }} >
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                mode='contained'
                style={{ margin: 0, padding: 0, marginTop: StatusBar.currentHeight }}
            />
            <View style={{ flex: 1, rowGap: mainPadding * 2, justifyContent: "center" }}>
                <Text style={{ color: colors.primary }} variant='headlineLarge'>Otp Verification</Text>
                <View style={{ rowGap: mainPadding }}>
                    <Text style={{ color: colors.primary }} variant='bodySmall'>You will be notified with an OTP !!</Text>

                    <AppInputField
                        labelText={'Enter OTP here'}
                        LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                        value={Phone}
                        onChangeText={(val) => setPhone(val)}
                        keyboardType='phone-pad'
                    />

                    {/* <Button mode='contained' onPress={clearText}>Clear</Button>
                    <Button mode='contained' onPress={setText}>SetValue</Button> */}

                </View>
            </View>
            <View style={{ flex: 1, rowGap: mainPadding, justifyContent: 'center' }}>
                <AppButton
                    label={'Next'}
                    onPress={onOtpVerificationHandler}
                // loading={LoginLoading ? true : false}
                // disabled={LoginLoading ? true : false}
                />
                <View style={{ justifyContent: 'center', flexDirection: 'row', columnGap: heightPercentageToDP(0.5), alignItems: 'center' }}>
                    <Text style={{ color: colors.primary }} variant='bodyMedium' >Already have an account?</Text>
                    <Text style={{ color: colors.primary }} onPress={() => navigation.goBack()} variant='labelLarge'>Login</Text>
                </View>

            </View>
        </View>
    )
}