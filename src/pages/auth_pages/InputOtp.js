import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useTheme, Text, IconButton } from 'react-native-paper'
import AppInputField from '../../components/general/AppInputField'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AppButton from '../../components/general/AppButton'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../../context/AuthContext'
export default function InputOtp({ navigation }) {
    const { UserAuthInfo,
        setUserAuthInfo,
        userSignIn,
        userLogout } = useContext(AuthContext)
    const { colors, spacing } = useTheme()
    const [Phone, setPhone] = useState('9695949392')
    const [pin, setPin] = useState('');

    function onOtpVerificationHandler() {
        userSignIn()
    }

    const styles = StyleSheet.create({
        outputView: {
            width: '90%',
            height: 80,
            alignSelf: 'center',
            borderRadius: 10,
            marginBottom: 20
        },
        underlineStyleBase: {
            width: 40,
            height: 45,
            borderWidth: 2,
            borderRadius: 5,
            // borderColor: 'grey',
            color: 'black',
            fontSize: 20
        },

        underlineStyleHighLighted: {
            borderColor: colors.primary,
        },

    })


    return (
        <View style={{ flex: 1, paddingHorizontal: spacing }} >
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                mode='contained'
                style={{ margin: 0, padding: 0, marginTop: StatusBar.currentHeight }}
            />
            <View style={{ flex: 1, rowGap: spacing.sm, justifyContent: "center" }}>
                <Text style={{ color: colors.primary }} variant='headlineLarge'>Otp Verification</Text>
                <View style={{ rowGap: spacing }}>
                    <Text style={{ color: colors.primary }} variant='bodySmall'>You have received a 6-digit OTP on  XXXXXXX149</Text>
                    {/* <AppInputField
                        labelText={'Enter OTP here'}
                        LeftContent={<Text variant='bodyMedium' style={{ color: colors.background }}>+91</Text>}
                        value={Phone}
                        onChangeText={(val) => setPhone(val)}
                        keyboardType='phone-pad'
                    /> */}

                    <OTPInputView
                        style={styles.outputView}
                        pinCount={6}
                        code={pin}
                        onCodeChanged={(value) => setPin(value)}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    />

                    <View style={{ rowGap: spacing.sm, }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                            <Text style={{ color: colors.primary }} variant='bodySmall'>Didn't received the OTP ? Resend</Text>
                            <Text style={{ color: colors.primary }} variant='bodySmall'> <MaterialCommunityIcons name='timer-outline' /> 120 sec</Text>
                        </View>
                        <Text style={{ color: colors.primary }} variant='bodySmall'>Change mobile number</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, rowGap: spacing.sm, justifyContent: 'center' }}>
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

