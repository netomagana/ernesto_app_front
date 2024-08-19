import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import AddScreen from './screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Editar" component={EditScreen} />
        <Stack.Screen name="Agregar" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
