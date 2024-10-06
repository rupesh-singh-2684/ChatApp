import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home";
import Profile from "../../screens/profile";
import { ScreenNames } from "../screennames";
import Shop from "../../screens/shop";
import Settings from "../../screens/settings";
import { Image } from "react-native";
import { Images } from "../../assests/images";
import { Icons } from "../../assests/icons";


const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size}) =>{
                    let iconname;
                    if(route.name === 'Home'){
                        if(focused){
                        iconname = Icons.Home}
                        else{
                            iconname = Icons.Home
                        }
                    }
                    if(route.name === 'Account'){
                        if(focused){
                        iconname = Icons.Account}
                        else{
                            iconname = Icons.Account
                        }
                    }
                    if(route.name === 'Favorites'){
                        if(focused){
                        iconname = Icons.Fav}
                        else{
                            iconname = Icons.Fav
                        }
                    }
                    if(route.name === 'Menu'){
                        if(focused){
                        iconname = Icons.Menu}
                        else{
                            iconname = Icons.Menu
                        }
                    }
                     return <Image
                     source={iconname}
                     style={{width:22,height:22}}/>            
                }
            })}>
                <Tab.Screen
                    component={Home}
                    name={ScreenNames.Home}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    component={Profile}
                    name={ScreenNames.Account}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    component={Shop}
                    name={ScreenNames.Favorites}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    component={Settings}
                    name={ScreenNames.Menu}
                    options={{ headerShown: false }}
                />
                
            </Tab.Navigator>
        )
    }
}