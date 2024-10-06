import React, { Component } from "react";
import { View,Text, ImageBackground } from "react-native";
import styles from "./styles";
import { Images } from "../../assests/images";

export default class Splash extends Component{

    handleHome = () => {
            const { navigation } = this.props;
            this.props.navigation.reset({ 
                index :0,
                routes: [{name: 'BottomTab'}]
            })
    };
    componentDidMount = () => {
        setTimeout(() => {
            this.handleHome()
        }, 1500);
    }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={Images.SplashScreen}
                style={styles.Img}/>
            </View>
        )
    }
}