import React from "react";
import { View, Text, SafeAreaView, Image, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../assests/icons"; // Corrected path



const Header: React.FC = ({navigation}) => {

  const handleNav = () => {
    navigation.navigate('SearchPhone');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={{ flexDirection: 'row' }}>
          {/* <Image source={Icons.BackIcon} style={styles.backIcon} /> */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Messages
            </Text>
            <Text style={styles.contact}>
              45 contacts
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleNav}>
          <View style={styles.addView}>
        <Image source={Icons.addPhone} style={styles.addIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
