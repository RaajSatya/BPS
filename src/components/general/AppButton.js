import { View, Text } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export default function AppButton({ ButtonContentStyle, ButtonStyle, icon, loading, disabled, onPress, label }) {
    const { roundness, spacing } = useTheme()
    return (
        <Button
            style={ButtonStyle}
            mode='contained'
            theme={{ roundness: 1 }}
            contentStyle={[{}, ButtonContentStyle]}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
            icon={icon}
        >{label}</Button>
    )
}