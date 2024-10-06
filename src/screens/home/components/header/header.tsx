import React from "react";
import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../assests/icons"; // Corrected path



const Header: React.FC = ({navigation}) => {

  const handleNav = () => {
    navigation.navigate('SearchPhone');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          {/* <Image source={Icons.BackIcon} style={styles.backIcon} /> */}
          <View style={{ marginHorizontal: 40 ,marginVertical:20}}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: '600', marginBottom: 10 }}>
              Messages
            </Text>
            <Text style={{ fontSize: 13 ,color: 'white'}}>
              45 contacts
            </Text>
          </View>
        </View>
        <Pressable onPress={handleNav}>
        <Image source={Icons.Notifications} style={styles.addIcon} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;
