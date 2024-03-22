import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import GameScreen from './src/screens/GameScreen';
import Box from './src/layouts/MainLayout';

  const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
      <StatusBar style="auto" />

        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
            title: "151 Pokemon Game"
          }} />

          <Stack.Screen 
            name="Game" 
            component={GameScreen} 
            options={{
            title: "151 Pokemon Game - Play"
          }} />

          <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{
            title: "Stuff"
          }} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}
