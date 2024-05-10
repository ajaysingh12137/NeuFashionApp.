import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Settings = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '640140098519-027uah996g5bc4i0m8hn0fdqmtmuhidu.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '677035332402-qd1eoo4o8p71mn1na665rkijnkvbrkk9.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  const onpressgoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, '------ ok ');
    } catch (error) {
      console.log(error, '----->>>> error');
    }
  };
  const usersignout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    Alert.alert('User SignOut');
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onpressgoogle}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 20,
          width: '30%',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => usersignout()}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 20,
          width: '30%',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 23, color: 'white'}}>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
