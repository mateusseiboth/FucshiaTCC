import * as React from 'react';   
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BemVindo from "../pages/BemVindo"
import FucshiaHome from '../pages/FucshiaHome'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bem Vindo"
        component={BemVindo}
      />
  
      <Stack.Screen
        name="Fucshia Home"
        component={FucshiaHome}
      />
    </Stack.Navigator>
  );
}