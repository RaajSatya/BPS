import { View, Text, Alert, ToastAndroid } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()
export function AuthProvider({ children }) {
    const [UserAuthInfo, setUserAuthInfo] = useState(null)
    function userSignUp(name, email, password, phone, deviceToken) {

    }
    function userSignIn(rol) {
        setUserAuthInfo(rol)
        // setsigninLoading(true)
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then((res) => {
        //         setsigninLoading(false)
        //     }).catch((error) => {
        //         setsigninLoading(false)
        //         Alert.alert(error.code)
        //     })
    }
    async function userLogout() {
        setUserAuthInfo(null)
        // setLogoutLoading(true)
        // try {
        //     await messaging().deleteToken().then(async () => {
        //         firebase.firestore().collection('fcmtoken')
        //             .doc(auth()?.currentUser?.uid)
        //             .delete()
        //             .then((res) => {
        //                 firebase.auth().signOut().then(async () => {
        //                     await AsyncStorage.clear()
        //                     ToastAndroid.show('Logout Successfully', ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        //                     setLogoutLoading(false)
        //                 }).catch((er) => {
        //                     setLogoutLoading(false)
        //                     console.log(er)
        //                 })
        //             })
        //     }).catch((e) => {
        //         setLogoutLoading(false)
        //         console.log(e)
        //     })
        // } catch (error) {
        //     setLogoutLoading(false)
        //     console.log('logout error', error)
        // }
    }
    // calling in BottomNavigator.js
    async function saveTokenToDatabase(token) {
        // Add the token to the users datastore
        // await firebase.firestore()
        //     .collection('fcmtoken')
        //     .doc(auth()?.currentUser?.uid)
        //     .set({
        //         userId: auth()?.currentUser?.uid,
        //         emailId: auth().currentUser.email,
        //         deviceToken: token,
        //         createdAt: Date.now()
        //     }).then(() => {
        //         ToastAndroid.show('Token Update', ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        //     }).catch((er) => {
        //         ToastAndroid.show('Token Update Failed' + er, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        //     })
    }
    function getAllUsers(userId) {
        // firebase.firestore()
        //     .collection('users')
        //     .where('userId', '!=', userId)
        //     .onSnapshot((res) => {
        //         let userData = []
        //         res.forEach((user) => {
        //             userData.push(user.data())

        //         })
        //         setallUsers(userData)
        //     })
    }
    function getUserProfile(userId) {
        // firebase.firestore()
        //     .collection('users')
        //     .doc(userId)
        //     .onSnapshot((data) => {
        //         setuserProfileInfo(data.data())
        //     })
    }
    function getTargetUserFcmToken(userId) {
        // firebase.firestore()
        //     .collection('fcmtokens')
        //     .doc(userId)
        //     .onSnapshot((data) => {
        //         settargetUserFcmToken(data.data().deviceToken)
        //     })
    }
    function getUsers() {
        // firebase.firestore()
        //     .collection('users')
        //     .onSnapshot((data) => {
        //         let users = []
        //         data.forEach((doc) => {
        //             users.push(doc.data())
        //         })
        //         setuserList(users)
        //     });
    }
    // useEffect(() => {
    //     getUsers()
    // }, []);

    return (
        <AuthContext.Provider value={{
            UserAuthInfo,
            setUserAuthInfo,
            userSignIn,
            userLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}