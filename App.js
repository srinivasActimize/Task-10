import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ui/Home';
import Details from './ui/Details';
import { fonts } from './Theme/Theme';
const Stack = createNativeStackNavigator();
export default function App() {

  const font = fonts();

  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='homepage' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
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
