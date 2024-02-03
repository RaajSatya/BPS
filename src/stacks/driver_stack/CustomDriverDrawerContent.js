import { View, ImageBackground, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTheme, Text } from 'react-native-paper';
// import Colorss from '../../Utils/Colorss';
// import Lottie from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function CustomDriverDrawerContent(props) {
    const { colors, fonts, mainPadding } = useTheme()
    const { navigation, route } = props
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <DrawerContentScrollView {...props}>
                <View style={{ margin: mainPadding, rowGap: mainPadding }}>
                    <Text style={{ color: colors.background, fontWeight: "800" }} variant='titleLarge'> Bharat</Text>
                    <DrawerItemList  {...props} />
                    {/* <DrawerItem {...props}
                        label={'Profile'} labelStyle={{ color: colors.background, fontSize: fonts.bodyMedium.fontSize }}
                        icon={({ color }) => <MaterialCommunityIcons color={colors.background} name='account-outline' size={mainPadding} />}
                        onPress={() => navigation.navigate('Profile')}
                    />
                    <DrawerItem {...props}
                        label={'Help & Support'} labelStyle={{ color: colors.background, fontSize: fonts.bodyMedium.fontSize }}
                        icon={({ color }) => <MaterialCommunityIcons color={colors.background} name='help-circle-outline' size={mainPadding} />}
                        onPress={() => navigation.navigate('HelpSupport')}
                        to='HelpSupport'
                    /> */}
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
