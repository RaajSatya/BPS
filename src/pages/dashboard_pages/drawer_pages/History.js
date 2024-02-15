import { View } from 'react-native'
import React from 'react'
import { useTheme, Text, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../../../components/general/AppHeader'

export default function History() {
    const { spacing, colors, radius } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, rowGap: spacing.sm, paddingHorizontal: spacing.sm }}>
            <AppHeader onPress={() => navigation.goBack()} />
            <View style={{ rowGap: spacing.sm }}>
                <Text variant='bodyLarge' style={{ fontWeight: "800", color: colors.primary }}>Active</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", columnGap: spacing.sm - 10, justifyContent: "flex-start", alignItems: "center" }}>
                        <IconButton mode='contained' size={spacing.sm * 1.6} containerColor={colors.primary} iconColor={colors.background} icon={'router'} />
                        <View>
                            <Text variant='bodyMedium' style={{ color: colors.primary, fontWeight: "600" }}>Ecommerce shippment</Text>
                            <Text variant='labelSmall' style={{ color: colors.primary }}>In process</Text>
                        </View>
                    </View>
                    <Text variant='labelSmall' style={{ color: colors.primary }}>11,45 PM</Text>
                </View>
            </View>

            <View style={{ rowGap: spacing.sm }}>
                <Text variant='bodyLarge' style={{ fontWeight: "800", color: colors.primary }}>Previous</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", columnGap: spacing.sm - 10, justifyContent: "flex-start", alignItems: "center" }}>
                        <IconButton mode='contained' size={spacing.sm * 1.6} containerColor={colors.primary} iconColor={colors.background} icon={'chart-pie'} />
                        <View>
                            <Text variant='bodyMedium' style={{ color: colors.primary, fontWeight: "600" }}>Weelent print</Text>
                            <Text variant='labelSmall' style={{ fontWeight: "300", color: 'green' }}>Delivered</Text>
                        </View>
                    </View>
                    <Text variant='labelSmall' style={{ color: colors.primary }}>11,45 PM</Text>
                </View>

            </View>

            <View style={{}}>
                {/* <Text variant='bodyLarge' style={{ fontWeight: "800", color: colors.primary }}>Previous</Text> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", columnGap: spacing.sm - 10, justifyContent: "flex-start", alignItems: "center" }}>
                        <IconButton mode='contained' size={spacing.sm * 1.6} containerColor={colors.primary} iconColor={colors.background} icon={'router'} />
                        <View>
                            <Text variant='bodyMedium' style={{ color: colors.primary, fontWeight: "600" }}>Furniture living</Text>
                            <Text variant='labelSmall' style={{ fontWeight: "300", color: colors.error }}>Canceled</Text>
                        </View>
                    </View>
                    <Text variant='labelSmall' style={{ color: colors.primary }}>11,45 PM</Text>
                </View>

            </View>

            <View style={{}}>
                {/* <Text variant='bodyLarge' style={{ fontWeight: "800", color: colors.primary }}>Previous</Text> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", columnGap: spacing.sm - 10, justifyContent: "flex-start", alignItems: "center" }}>
                        <IconButton mode='contained' size={spacing.sm * 1.6} containerColor={colors.primary} iconColor={colors.background} icon={'chart-pie'} />
                        <View>
                            <Text variant='bodyMedium' style={{ color: colors.primary, fontWeight: "600" }}>  Takoyaki food</Text>
                            <Text variant='labelSmall' style={{ fontWeight: "300", color: 'green' }}>Delivered</Text>
                        </View>
                    </View>
                    <Text variant='labelSmall' style={{ color: colors.primary }}>11,45 PM</Text>
                </View>

            </View>
        </View>
    )
}