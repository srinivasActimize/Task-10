import { View, Image, Text,  TextInput, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Theme } from '../Theme/Theme'
import styles from '../FontStyle/FontStyles'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
    const navigation=useNavigation();
    const navigateOnPress=(str)=>{
        navigation.navigate('Details',{category:str});
    }
    
  const handlePayment = async () => {
    
      const options = {
        key: "rzp_test_Rl6zFhLRzvwqro",  
        amount: 170*100,
        currency: 'INR',
        name: "Movie Ticket Booking",
        description: `Booking for chilli chicken`,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment Response:", response);
        },
        prefill: {
          name: "Srinu",
          email: "srinu@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#8B5CF6",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
  }
    return (
        <ScrollView style={styles.body}>
            <View style={styles.starting}>
                <Text style={Theme.font20SemiBold}>Hey srinu, Good Morning!</Text>
            </View>
            <View style={styles.text}>
                <Ionicons name='search' size={28} color='grey' />
                <TextInput placeholder='search dishes, restaurants' placeholderTextColor="grey" />
            </View>
            <Text style={[Theme.font24SemiBold,{paddingLeft:10}]}>All categories</Text>
            <View style={styles.categorieImages}>
                <ScrollView horizontal={true}>
                    <Pressable onPress={() => { navigateOnPress('burgers') }}>
                        <View style={styles.card}>
                            <Image style={styles.img} source={require('../assets/images/burger.png')} />
                            <View>
                                <Text style={Theme.font20SemiBold}>Burgers</Text>
                                <View style={styles.cardContent}>
                                    <Text>Starting </Text>
                                    <Text>$50</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => { navigateOnPress('pizzas') }}>
                        <View style={styles.card}>
                            <Image style={styles.img} source={{ uri: 'https://pngimg.com/uploads/pizza/pizza_PNG7104.png' }} />
                            <View>
                                <Text style={Theme.font20SemiBold}>Pizza</Text>
                                <View style={styles.cardContent}>
                                    <Text>Starting </Text>
                                    <Text>$20</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => { navigateOnPress('biryanis') }}>
                        <View style={styles.card}>
                            <Image style={styles.img} source={require('../assets/images/biryani.png')} />
                            <View>
                                <Text style={Theme.font20SemiBold}>biryani</Text>
                                <View style={styles.cardContent}>
                                    <Text>Starting </Text>
                                    <Text>$200</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => { navigateOnPress('curries') }}>
                        <View style={styles.card}>
                            <Image style={styles.img} source={require('../assets/images/mutton.png')} />
                            <View>
                                <Text style={Theme.font20SemiBold}>curries</Text>
                                <View style={styles.cardContent}>
                                    <Text>Starting </Text>
                                    <Text>$20</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </ScrollView>
            </View>

            <View>
                <Text style={[Theme.font24SemiBold,{paddingLeft:10}]}>Top Items</Text>
            </View>
            <Pressable>
                <View style={[styles.card, {width: "85%",alignSelf:"center"}]}>
                    <View style={styles.centering}>
                        <Image style={styles.image} source={require('../assets/images/chillichicken.png')} />
                    </View>
                    <View>
                        <Text style={Theme.font24SemiBold}>Chilli chicken</Text>
                        <View style={styles.cardContent}>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='star' size={25} color='#FEB05D' /><Text> 4.7</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='bicycle' size={25} color='#FEB05D' /><Text> Free</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='alarm' size={25} color='#FEB05D' /><Text> 20min</Text></View>
                        </View>
                        <TouchableOpacity onPress={handlePayment} >
                            <Text> Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
             <Pressable>
                <View style={[styles.card, {width: "85%",alignSelf:"center"}]}>
                    <View style={styles.centering}>
                        <Image style={styles.image} source={require('../assets/images/dumbiryani.png')} />
                    </View>
                    <View>
                        <Text style={Theme.font24SemiBold}>masala biryani</Text>
                        <View style={styles.cardContent}>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='star' size={25} color='#FEB05D' /><Text> 4.0</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='bicycle' size={25} color='#FEB05D' /><Text> Free</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='alarm' size={25} color='#FEB05D' /><Text> 10min</Text></View>
                        </View>
                    </View>
                </View>
            </Pressable>
             <Pressable>
                <View style={[styles.card, {width: "85%",alignSelf:"center"}]}>
                    <View style={styles.centering}>
                        <Image style={styles.image} source={require('../assets/images/tandoori.png')} />
                    </View>
                    <View>
                        <Text style={Theme.font24SemiBold}>Chicken Tandoori</Text>
                        <View style={styles.cardContent}>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='star' size={25} color='#FEB05D' /><Text> 5.0</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='bicycle' size={25} color='#FEB05D' /><Text> Free</Text></View>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='alarm' size={25} color='#FEB05D' /><Text> 15min</Text></View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </ScrollView>
    )
}

export default Home;
