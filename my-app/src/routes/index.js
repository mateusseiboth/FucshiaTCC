import * as React from 'react';
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
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="Fucshia Home"
        component={FucshiaHome}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}