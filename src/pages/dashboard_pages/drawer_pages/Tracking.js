import { View, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import { Avatar, IconButton, Text, useTheme } from 'react-native-paper'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Tracking() {
    const navigation = useNavigation()
    const { mainPadding, colors } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, rowGap: mainPadding, paddingTop: StatusBar.currentHeight, paddingHorizontal: mainPadding }} source={require('../../../assets/images/icons/Rectangle1.png')}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <MaterialCommunityIcons size={mainPadding}
                        style={{ margin: 0 }}
                        name={'menu'}
                        color={colors.background}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                    <Text style={{ color: colors.background, fontWeight: '800' }} variant='titleLarge'>Bharat</Text>
                    <Avatar.Image size={mainPadding * 2} source={require('../../../assets/images/icons/head.png')} />
                </View>
                <View style={{}}>
                    <Text style={{ color: colors.background, textAlign: 'center' }} variant='bodyLarge'>Hello Kush,</Text>
                    <Text style={{ color: colors.background, textAlign: 'center' }} variant='titleLarge'>Track your shipment</Text>
                </View>
            </ImageBackground>

            <View style={{ flex: 1 }}>

            </View>

        </View>
    )
}