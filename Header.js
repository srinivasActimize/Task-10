import { View, Text } from 'react-native'
import React from 'react'
import styles from './FontStyle/FontStyles'
import { Theme } from './Theme/Theme'

const Header = () => {
  return (
    <View style={{marginLeft:15,marginTop:30}}>
      <Text style={{fontWeight:'bold',fontSize:25}}>
      Welcome to VANTASALA
      </Text>
      <Text style={Theme.font36SemiBold}>Please Login First</Text>
    </View>
  )
}

export default Header