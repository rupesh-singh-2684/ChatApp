import React, { Component } from "react";
import { View,Text } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./screennames";
import BottomTab from "./bottomtab";
// import Home from "../screens/home";
// import Profile from "../screens/profile";
import Splash from "../screens/splash";
import DrawerTab from "./drawer";
import SearchPhone from "../screens/searchphone";
import ChatScreen from "../screens/chatScreen";


export default class RootNavigator extends Component{
    render(){
        const Stack = createNativeStackNavigator();
        return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom',
        }} 
        >
            <Stack.Screen
              component={Splash}
              name={ScreenNames.Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={BottomTab}
              name={ScreenNames.BottomTab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={SearchPhone}
              name={ScreenNames.SearchPhone}
              options={{headerShown: false}}
              />
            <Stack.Screen
              component={ChatScreen}
              name={ScreenNames.ChatScreen}
              options={{headerShown: false}}
              />
              {/* <Stack.Screen
                component={DrawerTab}
                name={ScreenNames.Drawer}
                options={{headerShown: false}}
              /> */}
            
      </Stack.Navigator>
      
    </NavigationContainer>
        )
    }
}