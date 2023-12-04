import { View, Text } from 'react-native'
import React from 'react'
import { IconButton, Menu, Snackbar, useTheme } from 'react-native-paper'

export default function MySnackBar({ children, onDismissSnackBar, visible }) {
    const { colors, fonts, mainPadding } = useTheme()
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={10000}
            elevation={1}
            wrapperStyle={{
                // backgroundColor: colors.primary,
                // top: 0
            }}
            style={{
                zIndex: 1,
                backgroundColor: colors.background,
                borderRadius: mainPadding
            }}
        >
            <View>
                {children}
                <IconButton onPress={onDismissSnackBar} style={{ alignSelf: "flex-end" }} icon={'close'} iconColor={colors.error} />
            </View>
        </Snackbar>
    )
}