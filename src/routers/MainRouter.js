import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthStack from './stack/AuthStack';
import MainStack from './stack/MainStack';
import { AuthContext } from '../context/AuthContext';
export default function MainRouter() {
    const { UserAuthInfo } = useContext(AuthContext)
    // const { getPost, setuserPost } = useContext(PostContext)
    const [initializing, setInitializing] = useState(true);

    // function onAuthStateChanged(userInfo) {
    //     if (userInfo) {
    //         setuserAuthInfo(userInfo)
    //         getUserProfile(userInfo.uid)
    //         getPost()
    //         AsyncStorage.setItem('authUser', JSON.stringify(userInfo))
    //     } else {
    //         setuserAuthInfo(null)
    //         setuserPost(null)
    //         AsyncStorage.removeItem('authUser')
    //     }
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;

    return (
        <NavigationContainer>
            {UserAuthInfo ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    )
}