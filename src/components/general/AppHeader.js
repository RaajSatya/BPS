import { View, Text, StatusBar, Alert, Image } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton, TouchableRipple, useTheme } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { he } from 'date-fns/locale'

export default function AppHeader({ onPress }) {
    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: StatusBar.currentHeight }}>
            <IconButton icon={'arrow-left'}
                iconColor={colors.primary}
                onPress={onPress}
                mode='contained'
                style={{ margin: 0, padding: 0 }}
            />

            <TouchableRipple
                onPress={() => navigation.navigate('Profile')}
            >
                <Avatar.Image
                    style={{
                        backgroundColor: colors.elevation.level2,
                        borderWidth: 2,
                        borderColor: colors.scrim,
                        height: widthPercentageToDP(10),
                        borderRadius: heightPercentageToDP(5),
                        width: heightPercentageToDP(5),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    size={widthPercentageToDP(8)}
                    source={require('../../assets/images/icons/head.png')}
                />
            </TouchableRipple>

        </View>
    )
}