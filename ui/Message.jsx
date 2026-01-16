import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Theme/Theme'
import styles from '../FontStyle/FontStyles'
import colors from '../Theme/Colors'

const Message = () => {
  return (
    <SafeAreaView>

      <View>
        <Text style={[Theme.font32SemiBold,{alignSelf:'center',paddingTop:10}]}> Notifications</Text>
        <View style={{borderWidth:3,borderRadius:10,borderColor:colors.themeColor,margin:8,padding:16,backgroundColor:'#e3f4f4',marginBottom:8}}>
          <Text>Get 20% off on Burgers</Text>
        </View>
         <View style={{borderWidth:3,borderColor:colors.themeColor,borderRadius:10,margin:8,padding:16,backgroundColor:'#e3f4f4',marginBottom:8}}>
          <Text>Get 30% off on Biryanis</Text>
        </View>
         <View style={{borderWidth:3,borderColor:colors.themeColor,borderRadius:10,margin:8,padding:16,backgroundColor:'#e3f4f4',marginBottom:8}}>
          <Text>Get 20% off on Curries</Text>
        </View>
         <View style={{borderWidth:3,borderColor:colors.themeColor,margin:8,borderRadius:10,padding:16,backgroundColor:'#e3f4f4',marginBottom:8}}>
          <Text>Look into this offer ...</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Message