import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../Theme/Theme';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Theme/Colors';

const Profile = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();

  const exit = async () => {
    await auth().signOut();
    await GoogleSignin.signOut();
    navigation.replace('Login');
  };
  console.log(user)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <View style={{flexDirection:'row',margin:30,justifyContent:'space-around' }}>
          <Image
            source={{ uri: user?.photoURL }}
            style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center' }}
          />
          <Text style={[Theme.font20SemiBold, { alignSelf: 'center' }]}>
            {user?.displayName}
          </Text>
        </View>

        <Text style={[Theme.font18SemiBold, { alignSelf: 'center' }]}> {user.email}</Text>

        <TouchableOpacity onPress={exit}>
          <Text style={[Theme.font18SemiBold, { alignItems: 'center', borderWidth: 2, borderRadius: 6, borderColor: 'purple', padding: 10, alignSelf: 'center', marginTop: 30 }]}>
            Sign Out
            <Ionicons name='exit' size={25} color={colors.themeColor} />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
