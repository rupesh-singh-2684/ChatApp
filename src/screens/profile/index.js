import React, { Component } from "react";
import { SafeAreaView,Text,View } from "react-native";
import styles from "./styles";

export default class Account extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.Title}>
                    Profile Page
                </Text>
                
            </View>
        )
    }
}