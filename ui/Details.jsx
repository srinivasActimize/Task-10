import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProductsDataActionInitiate } from '../Components/redux/Action/getItemsAction'
import { useDispatch } from 'react-redux'
import styles from '../FontStyle/FontStyles'
import { Theme } from '../Theme/Theme'
const Details = ({ route }) => {
  const { category } = route.params;
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    state => state.getproductsdata
  );

  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

  const firebaseKey = data ? Object.keys(data)[0] : null;

  const filteredData =
    firebaseKey && category
      ? data[firebaseKey][category]
      : [];

  console.log("CATEGORY:", category);
  console.log("FILTERED DATA:", filteredData);

  // const displayCategory=(data)=>()
  return (
    <View>
      <Text style={[styles.centering,Theme.font36SemiBold]}>{category.toUpperCase()}</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.centering}>
            <Text style={Theme.font24SemiBold}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ width: 300, height: 250 }} />
          </View>
        )}
      />

    </View>
  );
};


export default Details