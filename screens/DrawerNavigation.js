// DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NotesPage from '../NotesPage'; // Adjust the path as needed
import SomeOtherScreen from './SomeOtherScreen'; // Another screen example

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Notes">
        <Drawer.Screen name="Notes" component={NotesPage} />
        <Drawer.Screen name="Other" component={SomeOtherScreen} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
