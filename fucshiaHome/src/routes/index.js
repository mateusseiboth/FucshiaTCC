import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from "../pages/BemVindo"
import Setup1 from "../pages/BemVindo/1.js"
import FucshiaHome from '../pages/FucshiaHome'
import Charmander from '../pages/Charmander';
import Setup2 from "../pages/BemVindo/2.js"

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bem Vindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FucshiaHome"
        component={FucshiaHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Charmander"
        component={Charmander}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Setup1"
        component={Setup1}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Setup2"
        component={Setup2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}