import { StyleSheet, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import Header from '../Header';

export default function Login({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '925102963718-fi5afief8l6qntqf206g6k0ao9shct25.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(u => {
      setUser(u);
      if (initializing) setInitializing(false);

      if (u) {
        navigation.replace('MainTabs');
      }
    });

    return unsubscribe;
  }, []);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const res = await GoogleSignin.signIn();
    const idToken = res.data?.idToken || res.idToken;
    const credential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(credential);
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Header />
        <GoogleSigninButton
          style={{ width: 300, height: 65, marginTop: 200 }}
          onPress={onGoogleButtonPress}
        />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
