import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProductsDataActionInitiate } from '../Components/redux/Action/getItemsAction'
import { useDispatch } from 'react-redux'
import styles from '../FontStyle/FontStyles'
import { Theme } from '../Theme/Theme'
import { useNavigation } from '@react-navigation/native'
const Details = ({ route }) => {
  const { category } = route.params;
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    state => state.getproductsdata
  );
  const navigate= useNavigation();
  const detailsPage =(item)=>{
    navigate.navigate('ItemDetails',{itemDetails:item});
  }

  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

  const firebaseKey = data ? Object.keys(data)[0] : null;

  const filteredData =
    firebaseKey && category
      ? data[firebaseKey][category]
      : [];
      
  return (
    <View>
      <Text style={[styles.centering, Theme.font36SemiBold]}>{category.toUpperCase()}</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={()=>detailsPage(item)}>
            <View style={styles.card}>
              <View style={styles.centering}>
                <Text style={Theme.font24SemiBold}>{item.name}</Text>
                <Image source={{ uri: item.image }} style={{ width: 300, height: 220 }} />
                <Text style={{alignSelf:'flex-end',borderWidth:3,borderRadius:9,padding:4,borderColor:'green',width:80}}>Details</Text>
              </View>
            </View>
          </Pressable>
        )}
      />

    </View>
  );
};


export default Details