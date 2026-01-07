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
import { Ionicons } from '@expo/vector-icons';
import Profile from './ui/Profile';
import Message from './ui/Message';
import colors from './Theme/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const font = fonts();

function BottomTabs() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Profile') {
        iconName = 'person';
      } else if (route.name === 'Messages') {
        iconName = 'chatbox';
      }

      return <Ionicons name={iconName} size={24} color={colors.fundation} />;
    },
  })}
>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Messages" component={Message} />
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