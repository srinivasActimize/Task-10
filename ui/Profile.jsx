import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
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
        <View style={{ flexDirection: 'row', margin: 30, justifyContent: 'space-around' }}>
          <Image
            source={{ uri: user?.photoURL }}
            style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center' }}
          />
          <Text style={[Theme.font20SemiBold, { alignSelf: 'center' }]}>
            {user?.displayName}
          </Text>
        </View>

        <Text style={[Theme.font18SemiBold, { alignSelf: 'center' }]}> {user.email}</Text>
        <View style={sty.ProfileBox}>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='man' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Personal Info</Text>
          </View>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='location' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Addresses</Text>
          </View>
        </View>

         <View style={sty.ProfileBox}>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='cart-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Cart</Text>
          </View>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='heart-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Favourite</Text>
          </View>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='notifications-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Notifications</Text>
          </View>
          <View style={sty.ProfileList}>
            <Ionicons style={[sty.IconStyle,{alignSelf:'center'}]} name='cash-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Payment Methods</Text>
          </View>
        </View>

         <View style={sty.ProfileBox}>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='help-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>FAQ's</Text>
          </View>
          <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='infinite-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>User Reviews</Text>
          </View>
            <View style={sty.ProfileList}>
            <Ionicons style={sty.IconStyle} name='settings-outline' size={20} color={colors.themeColor} />
            <Text style={[Theme.font16Medium, { color: 'black' }]}>Settings</Text>
          </View>
        </View>

        <TouchableOpacity onPress={exit}>
          <Text style={[Theme.font18SemiBold, { alignItems: 'center', borderWidth: 2, borderRadius: 6, borderColor: 'purple', padding: 10, alignSelf: 'center', marginTop: 30 }]}>
            Sign Out
            <Ionicons name='caret-forward-outline' size={20} color={colors.themeColor} />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const sty = StyleSheet.create({
  ProfileList: {
    flexDirection: 'row',
    width: '50%',
    padding:12,
    paddingVertical:8,
    justifyContent:'flex-start',
    
  },
  IconStyle:{
    backgroundColor:'white',
    borderRadius:50,
    padding:4,
    marginRight:10
    },
  ProfileBox:{
    backgroundColor:'#dbe2e4f2',
    width:327,
    height:'auto',
    borderRadius:8,
    alignSelf:'center',
    margin:10
  }
})