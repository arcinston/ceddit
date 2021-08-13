import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/WelcomeScreen";
import Cards from "./screens/Cards";
import MessagesScreen from "./screens/MessagesScreen";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign in" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Sign up" component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;