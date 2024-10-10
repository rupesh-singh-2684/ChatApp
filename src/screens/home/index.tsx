import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from "./components/header/header";
import { Images } from "../../assests/images";
import Button from "../component/button";
import RbSheet from "../component/rbSheet/rbSheet";
import { Icons } from "../../assests/icons";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScreenNames } from "../../navigator/screennames";
import colors from "../../theme/colors";

interface ChatUser {
  _id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
}

const Home: React.FC<{ navigation: any }> = () => {
  const [isProfileChoiceVisible, setProfileChoiceVisible] = useState(false);
  const [chatUsers, setChatUsers] = useState<ChatUser[]>([]);
  const navigation: any = useNavigation();
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [filtersearch, setfiltersearch] = useState<ChatUser[]>([]);

  const functionfilter = (query: string) => {
    setSearchFilter(query);
    if (query) {
      const filteredUsers = chatUsers.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setfiltersearch(filteredUsers);
    } else {
      setfiltersearch(chatUsers);
    }
  };

  const profilePicker = () => {
    setProfileChoiceVisible(prevState => !prevState);
  };

  useEffect(() => {
    const loadChatUsers = async () => {
      const storedChatUsers = await AsyncStorage.getItem('chatUsers');
      if (storedChatUsers) {
        const parsedUsers = JSON.parse(storedChatUsers);
        setChatUsers(parsedUsers);
        setfiltersearch(parsedUsers);
      }
    };
    loadChatUsers();
  }, []);

  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(word => word.charAt(0).toUpperCase()).join('');
  };

  return (
    <>
      <Header navigation={navigation} 
      contacts = {chatUsers.length}/>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Image source={Icons.SearchIcon} style={styles.search} />
          <TextInput
            value={searchFilter}
            onChangeText={functionfilter}
            style={styles.inputcontainer}
            placeholder="Search messages..."
          />
        </View>

        {chatUsers.length === 0 ? (
          <>
            <View style={styles.contentContainer}>
              <Image source={Images.DummyImg} />
              <Text style={styles.noChatsText}>No chats, Yet!</Text>
              <Button onPress={profilePicker} />
            </View>
            <RbSheet
              visible={isProfileChoiceVisible}
              onClose={() => profilePicker}
              navigation={navigation}
              handleNavigation={() => {
                navigation.navigate('SearchPhone');
                profilePicker();
              }}
            />
          </>
        ) : (
          <View style={styles.listContainer}>
            <FlatList
              data={filtersearch}
              showsVerticalScrollIndicator={false}
              bounces={false}
              renderItem={({ item }) => {
                const randomColor = require('randomcolor');
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.ChatScreen, { user: item })}>

                    <View style={styles.box1}>
                      <View style={styles.profilePictureContainer}>
                        <View style={[styles.profilePicture, { backgroundColor: randomColor() }]}>
                          <Text style={styles.profileText}>{getInitials(item.name)}</Text>
                        </View>
                      </View>
                      <View style={styles.userInfo}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text3}>You: I don't remember anything</Text>
                      </View>
                      <Text>2:48 AM</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default Home;
