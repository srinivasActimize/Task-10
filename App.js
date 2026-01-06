import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ui/Home';
import Details from './ui/Details';
import { fonts } from './Theme/Theme';
import { Provider } from 'react-redux';
import store from './Components/redux/store';
import ItemDetails from './ui/ItemDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const font = fonts();


  function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        {/* Future tabs */}
        {/* <Tab.Screen name="Profile" component={Profile} /> */}
      </Tab.Navigator>
    );
  }

  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Bottom Tabs as main screen */}
          <Stack.Screen
            name="MainTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='ItemDetails' component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
