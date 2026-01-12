import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Message = () => {
  return (
    <SafeAreaView>

      <View>
        <View style={{borderWidth:3,borderColor:'purple',margin:8,padding:16,backgroundColor:'lightgrey',marginBottom:8}}>
          <Text>Get 20% off on Burgers</Text>
        </View>
         <View style={{borderWidth:3,borderColor:'purple',margin:8,padding:16,backgroundColor:'lightgrey',marginBottom:8}}>
          <Text>Get 30% off on Biryanis</Text>
        </View>
         <View style={{borderWidth:3,borderColor:'purple',margin:8,padding:16,backgroundColor:'lightgrey',marginBottom:8}}>
          <Text>Get 20% off on Curries</Text>
        </View>
         <View style={{borderWidth:3,borderColor:'purple',margin:8,padding:16,backgroundColor:'lightgrey',marginBottom:8}}>
          <Text>Look into this offer ...</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Message