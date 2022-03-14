import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../DrawerStuffs/DrawerContent';
import A from '../DrawerStuffs/A';
import B from '../DrawerStuffs/B';

DrawerContent;
const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="A" component={A} />
      <Drawer.Screen name="B" component={B} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
