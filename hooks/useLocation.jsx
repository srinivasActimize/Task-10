import { useEffect, useState } from 'react'
import * as Location from 'expo-location';

const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [address, setAddress] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});

    if (coords) {
      const { latitude, longitude } = coords;

      setLatitude(latitude);
      setLongitude(longitude);

      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setAddress(response[0]);
      console.log('Location:', response[0]);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { latitude, longitude, address, errorMsg };
};

export default useLocation;
