import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export default function AppButton({ ButtonContentStyle, ButtonStyle, icon, loading, disabled, onPress, label }) {
    return (
        <Button
            style={ButtonStyle}
            mode='contained'
            contentStyle={[{ paddingVertical: heightPercentageToDP(1) }, ButtonContentStyle]}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
            icon={icon}
        >{label}</Button>
    )
}