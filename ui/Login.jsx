import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { fonts } from '../Theme/Theme';

export default function Login({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const font=fonts();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '925102963718-fi5afief8l6qntqf206g6k0ao9shct25.apps.googleusercontent.com',
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

  const registerUser = async (email, password) => {
    try {
      const userCredential =
        await auth().createUserWithEmailAndPassword(email, password);
      console.log('User created:', userCredential.user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email');
      } else if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters');
      } else {
        alert(error.message);
      }
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential =
        await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email');
      } else if (error.code === 'auth/wrong-password') {
        alert('Wrong password');
      } else {
        alert(error.message);
      }
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const res = await GoogleSignin.signIn();
      const idToken = res.data?.idToken || res.idToken;
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
    } catch (error) {
      alert(error.message);
    }
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Header />

        <Image
          source={{
            uri: 'https://res.cloudinary.com/dm2xtqaqy/image/upload/v1768284501/delivery_oxyvxe.png',
          }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => loginUser(email, password)}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => registerUser(email, password)}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <GoogleSigninButton
          style={{ width: 300, height: 65, marginTop: 30 }}
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

  input: {
    width: 280,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },

  loginBtn: {
    width: 280,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },

  signupBtn: {
    width: 280,
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
