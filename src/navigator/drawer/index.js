import React from 'react-native';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import { Component } from 'react';



const Drawer = createDrawerNavigator();

export default class DrawerTab extends Component {
    render(){
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Home" 
        component={Home} 
        />
        <Drawer.Screen 
        name="Profile" 
        component={Profile} 
        />
      </Drawer.Navigator>
    
  );
}
}