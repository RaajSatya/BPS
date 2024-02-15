import { View, ImageBackground, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTheme, Text } from 'react-native-paper';
// import Colorss from '../../Utils/Colorss';
// import Lottie from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../../context/AuthContext';
export default function CustomDriverDrawerContent(props) {
    const { colors, fonts, spacing } = useTheme()
    const { userLogout } = useContext(AuthContext)

    const { navigation, route } = props
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <DrawerContentScrollView {...props}>
                <View style={{ margin: spacing.sm, rowGap: spacing.sm }}>
                    <Text style={{ color: colors.background, fontWeight: "800" }} variant='titleLarge'> Bharat</Text>
                    <DrawerItemList  {...props} />

                    <DrawerItem {...props}
                        label={'Logout'} labelStyle={{ color: colors.background, fontSize: fonts.bodyMedium.fontSize }}
                        icon={({ color }) => <MaterialCommunityIcons color={colors.background} name='help-circle-outline' size={spacing.sm} />}
                        onPress={() => userLogout()}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
