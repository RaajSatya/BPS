import { View, StatusBar } from 'react-native'
import React from 'react'
import { IconButton, Text, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function HelpSupport() {
  const navigation = useNavigation()
  const { mainPadding, colors } = useTheme()
  return (
    <View style={{ flex: 1, paddingHorizontal: mainPadding }}>
      <IconButton icon={'arrow-left'}
        iconColor={colors.primary}
        onPress={() => navigation.goBack()}
        mode='contained'
        style={{ marginTop: StatusBar.currentHeight, margin: 0, padding: 0 }}
      />
      <View style={{ rowGap: mainPadding }}>
        <Text variant='headlineSmall' style={{ color: colors.primary, textAlign: "center" }} > Welcome To Help&Support</Text>
        <Text variant='headlineSmall' style={{ color: colors.primary, textAlign: "center" }} > Welcome To Help&Support</Text>
      </View>
    </View>
  )
}