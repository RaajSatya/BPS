import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import DashboardRouter from './route/DashboardRouter';
import PublicRouter from './route/PublicRouter';
import { AuthContext } from '../context/AuthContext';
import DriverRouter from './route/DriverRouter';
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
            {UserAuthInfo == "User" ?
                <DashboardRouter /> : UserAuthInfo == "Driver" ?
                    <DriverRouter />
                    : <PublicRouter />}
        </NavigationContainer>
    )
}