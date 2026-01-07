import { View, Text, Pressable, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../FontStyle/FontStyles'
import { Theme } from '../Theme/Theme'
import { Ionicons } from '@expo/vector-icons'
import RazorpayCheckout from 'react-native-razorpay';
const ItemDetails = ({ route }) => {

    const { itemDetails } = route.params;

    // testkey=rzp_test_S0VaD5Wuoaq0Oe
    // testkeysecret=yhpF2rrPR1bAXNZdObFrjybr
    

   const handlePayment = () => {
  const options = {
    description: 'proceed to payment',
    image: itemDetails.image,
    currency: 'INR',
    key: 'rzp_test_S0VaD5Wuoaq0Oe',
    amount: itemDetails.cost * 100,
    name: itemDetails.name,
    prefill: {
      email: 'srinu@example.com',
      contact: '9999999999',
      name: 'Srinu',
    },
    theme: { color: '#8B5CF6' },
  };

  RazorpayCheckout.open(options)
    .then((data) => {
      alert(`Payment Success: ${data.razorpay_payment_id}`);
    })
    .catch((error) => {
      alert(`Payment Failed: ${error.code} | ${error.description}`);
    });
};
    return (
        <View>
            <Pressable>
                <View style={[styles.card, { width: "85%", alignSelf: "center" }]}>
                    <View style={styles.centering}>
                    <Image
                        style={styles.image}
                        source={{ uri: itemDetails.image }}
                    />
                    </View>

                    <View>
                        <Text style={Theme.font24SemiBold}>{itemDetails.name}</Text>
                        <Text style={[styles.cardContent,Theme.font16Regular,{padding:10}]}>{itemDetails.description}</Text>
                        <View style={[{padding:15},styles.cardContent]}>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='star' size={25} color='#FEB05D' /><Text> 4.0</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='bicycle' size={25} color='#FEB05D' /><Text> Free</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='alarm' size={25} color='#FEB05D' /><Text> 10min</Text></View>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            title="order now"
                            onPress={handlePayment}>
                            <Text style={[styles.buttonText, { color: styles.textColor }]}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default ItemDetails