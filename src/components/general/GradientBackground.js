import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from 'react-native-paper'

export default function GradientBackground({ children, style }) {
    const { colors, spacing } = useTheme()
    return (
        <LinearGradient style={[style, {
            borderBottomRightRadius: spacing.md,
            borderBottomLeftRadius: spacing.md,

        }]} colors={[colors.primary, '#798FC7']}>
            {children}
        </LinearGradient>
    )
}
