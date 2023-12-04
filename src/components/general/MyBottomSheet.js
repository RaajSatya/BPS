import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MyBottomSheet = ({ children, sheetHeight, setModalVisible, modalVisible }) => {
    const { roundness, colors, mainPadding } = useTheme()

    const styles = StyleSheet.create({
        modalView: {
            padding: mainPadding,
            borderTopLeftRadius: mainPadding * roundness,
            borderTopRightRadius: mainPadding * roundness,
            backgroundColor: colors.surfaceVariant,
            justifyContent: 'flex-end',
            height: sheetHeight,
            bottom: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,

        },

    });

    return (
        <Modal
            presentationStyle='overFullScreen'
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent
            style={{ justifyContent: 'flex-end' }}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalView}>
                {children}
            </View>
        </Modal>

    );
};



export default MyBottomSheet;