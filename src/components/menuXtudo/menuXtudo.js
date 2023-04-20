import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Charmander from '../../pages/Charmander';
import FucshiaHome from '../../pages/FucshiaHome';
import MenuDrawer from './MenuDrawer.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MenuDrawer {...props} />}>
      <Drawer.Screen name="Home" component={FucshiaHome} />
      <Drawer.Screen name="Aperta aí" component={Charmander} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;