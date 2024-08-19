import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '.././screens/HomeScreen';
import EditScreen from '.././screens/EditScreen';
import AddScreen from '.././screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MagaCar Garage" component={HomeScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Editar cliente existente" component={EditScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Agregar cliente nuevo" component={AddScreen} options={{headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
