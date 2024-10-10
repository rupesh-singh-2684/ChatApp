import React from "react";
import { View, Text, SafeAreaView, Image, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../assests/icons"; // Corrected path
import { useNavigation } from "@react-navigation/native";

interface CustomModalProps {
  contacts: string;
  navigation: any;
}

const Header: React.FC = (props:CustomModalProps) => {
  const { contacts } = props;

  const navigation = useNavigation()
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
              {contacts} contacts
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
