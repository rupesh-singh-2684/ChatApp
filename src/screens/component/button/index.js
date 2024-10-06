import { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default class Button extends Component{
    render(){
        return(
            
            <Pressable style={({pressed})=> [{backgroundColor: pressed ? 'lightgrey' : '#2A7BBB'},styles.pressable]} onPress={this.props.onPress}>
                <Text style={styles.text}>Start Chat</Text>
            </Pressable>
            
        )
    }
}

