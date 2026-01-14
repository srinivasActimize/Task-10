import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import store from './Components/redux/store';
import Home from './ui/Home';
import Login from './ui/Login';
import Profile from './ui/Profile';
import Message from './ui/Message';
import Details from './ui/Details';
import ItemDetails from './ui/ItemDetails';
import colors from './Theme/Colors';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Messages') iconName = 'notifications';
          if (route.name === 'Profile') iconName = 'person';

          return <Ionicons name={iconName} size={24} color={colors.themeColor} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="#fff" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
