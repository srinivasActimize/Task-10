import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../Theme/Theme';

const Profile = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();

  const exit = async () => {
    await auth().signOut();
    await GoogleSignin.signOut();
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={[Theme.font36SemiBold, { alignSelf: 'center' }]}>
          {user?.displayName}
        </Text>

        <Image
          source={{ uri: user?.photoURL }}
          style={{ width: 200, height: 200, borderRadius: 100, alignSelf: 'center' }}
        />

        <TouchableOpacity onPress={exit}>
          <Text style={[Theme.font18SemiBold, { borderWidth:2,borderRadius:6,borderColor:'purple',padding:10,alignSelf: 'center', marginTop: 30 }]}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
