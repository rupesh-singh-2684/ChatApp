import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Header from "./components/header/header";
import SearchInput from "../component/searchInput/searchInput";
import { Images } from "../../assests/images";
import Button from "../component/button";
import RbSheet from "../component/rbSheet/rbSheet";
import { Icons } from "../../assests/icons";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import { ScreenNames } from "../../navigator/screennames";


interface ChatUser {
    _id: number; 
    name: string;
    avatar?: string; 
    lastMessage?: string;
    timestamp?: string; 
}
const Home: React.FC<{ navigation:any}> = ({ }) => {
    const [isProfileChoiceVisible, setProfileChoiceVisible] = useState(false);
    const [chatUsers, setChatUsers] = useState<ChatUser[]>([]);
    const navigation: any = useNavigation();
    const randomColor = require('randomcolor');

    const profilePicker = () => {
        setProfileChoiceVisible(prevState => !prevState);
    };
    const handleSearch = () =>{

    }
    useEffect(() => {
        const loadChatUsers = async () => {
        const storedChatUsers = await AsyncStorage.getItem('chatUsers');
        
        if (storedChatUsers) {
            const parsedUsers = JSON.parse(storedChatUsers);
            setChatUsers(parsedUsers);
            // console.log(chatUsers)
        }
        };
      
        loadChatUsers();
        }, [chatUsers]);
      
        const clearChatUsers = async () => {
          await AsyncStorage.clear();
          setChatUsers([]); 
        };
      
        // Function to get initials from the name
        const getInitials = (name: string) => {
          const names = name.split(' ');
          return names.map(word => word.charAt(0).toUpperCase()).join('');
        };
    return (
        <>
            <Header navigation={navigation}/>
            <View style={styles.container}>
                <SearchInput source={Icons.SearchIcon} 
                Senddata={handleSearch}/>
                
                {chatUsers.length === 0 ? (
                <>
                <View style={styles.contentContainer}>
                    <Image source={Images.DummyImg} />
                    <Text style={styles.noChatsText}>
                        No chats, Yet!
                    </Text>
                    <Button onPress={profilePicker} />
                </View>
                <RbSheet
                    visible={isProfileChoiceVisible}
                    onClose={()=> profilePicker}
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
                    data={chatUsers}
                    // keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(ScreenNames.ChatScreen, { user: item })
                        }
                      >
                        <View style={styles.box1}>
                          <View style={styles.profilePictureContainer}>
                            <View style={[styles.profilePicture, {}]}>
                              <Text style={styles.profileText}>
                                {getInitials(item.name)} 
                              </Text>
                            </View>
                          </View>
      
                          <View style={styles.userInfo}>
                            <Text style={styles.text}>{item.name}</Text>
                            {item.lastMessage && (
                                <Text style={styles.lastMessageText}>
                                {item.lastMessage} 
                                </Text>
                            )}
                            </View>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
        </>
    );
};
export default Home;


