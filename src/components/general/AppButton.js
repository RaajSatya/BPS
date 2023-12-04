import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export default function AppButton({ icon, loading, disabled, onPress, label }) {
    return (
        <Button
            mode='contained'
            contentStyle={{ height: 56 }}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
            icon={icon}
        >{label}</Button>
    )
}