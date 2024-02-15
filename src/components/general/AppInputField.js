import { View, TextInput } from 'react-native'
import React from 'react'
import { IconButton, Text, useTheme } from 'react-native-paper'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export default function AppInputField({ containerStyle, InputStyle, BackGroundStyle, labelText, secureTextEntry, keyboardType, LeftContent, RightContent, placeholder, value, onChangeText }) {
    const { colors, spacing, fonts, roundness } = useTheme()
    return (
        <View style={[{ rowGap: spacing.sm }, containerStyle]}>
            {labelText ? <Text style={{ color: colors.primary }} variant='bodyMedium'>{labelText}</Text> : null}
            <View
                style={[{
                    backgroundColor: colors.primary,
                    borderRadius: roundness,
                    paddingHorizontal: widthPercentageToDP(3),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    columnGap: spacing.sm
                }, BackGroundStyle]}
            >
                {LeftContent}

                <TextInput
                    cursorColor={colors.background}
                    placeholderTextColor={colors.background}
                    style={[{
                        color: colors.background,
                        flexGrow: 1,
                        fontSize: fonts.bodyMedium.fontSize
                    }, InputStyle]}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
                {RightContent}

            </View>
        </View>
    )
}