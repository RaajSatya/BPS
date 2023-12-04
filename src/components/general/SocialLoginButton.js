import { View, Text } from 'react-native'
import React from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function SocialLoginButton({ iconName, onPress }) {
    const { roundness, radius, colors } = useTheme()
    return (
        <TouchableRipple style={{
            width: widthPercentageToDP(25),
            padding: 8, backgroundColor: colors.primary,
            borderRadius: radius
        }}
            onPress={onPress}
        >
            <MaterialCommunityIcons style={{ alignSelf: "center" }} color='white' size={widthPercentageToDP(8)} name={iconName} />
        </TouchableRipple>
    )
}