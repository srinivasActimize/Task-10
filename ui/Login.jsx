import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'expo-dev-client'
import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React,{useEffect,useState} from 'react';
import Header from '../Header';
import Home from './Home';

export default function Login() {

  const [initializing,setInitializing]=useState(true);
  const [user,setUser]=useState();
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '925102963718-fi5afief8l6qntqf206g6k0ao9shct25.apps.googleusercontent.com',
    });
  }, []);

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber=auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);


  const onGoogleButtonPress = async() => {

 await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
 
    const response = await GoogleSignin.signIn();
    
    const idToken = response.data?.idToken || response.idToken;
    const googleCredential= auth.GoogleAuthProvider.credential(idToken);

    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user)=>{
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
const signOut = async () => {
  try {
    await auth().signOut();          
    await GoogleSignin.signOut();    
    await GoogleSignin.revokeAccess();
    setUser(null);
  } catch (error) {
    console.error(error);
  }
};

  if(initializing) return null;


  if(!user){
    return(
      <View style={styles.container}>
        <Header/>
        <GoogleSigninButton
         style={{width:300,height:65,marginTop:200}}
         onPress={onGoogleButtonPress}
        /> 
      </View>
    )
  }
  return(
    <Home signOut={signOut} user={user}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
});
