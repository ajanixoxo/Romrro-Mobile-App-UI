
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1}   options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Screen2}   options={{ headerShown: false }} />
        <Stack.Screen name="Hpage" component={Screen3}   options={{ headerShown: false }} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
