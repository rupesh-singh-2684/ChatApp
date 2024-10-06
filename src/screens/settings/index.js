import React, { Component } from "react";
import { SafeAreaView,Text,View } from "react-native";
import styles from "./styles";

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.Title}>
                    Setting Page
                </Text>
                
            </View>
        )
    }
}