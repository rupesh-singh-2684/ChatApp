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
    avatar: string; 
    lastMessage: string;
    timestamp: string; 
}
const Home: React.FC<{ navigation:any}> = () => {
    const [isProfileChoiceVisible, setProfileChoiceVisible] = useState(false);
    const [chatUsers, setChatUsers] = useState<ChatUser[]>([]);
    const navigation: any = useNavigation();
    const [lastMessage, setlastMessage] = useState('')
    const randomColor = require('randomcolor');
     
    const [fetchdata, setdata] = useState([]);
    const [hasSearch, setHasSearched] = useState(false);
    const [filtersearch, setfiltersearch] = useState([]);




    const profilePicker = () => {
        setProfileChoiceVisible(prevState => !prevState);
    };
    const handleSearch = (user: any, hasSearch: any, filtersearch: any) =>{
      setdata(user);
      setHasSearched(hasSearch);
      setfiltersearch(filtersearch);
    }
    useEffect(() => {
        const loadChatUsers = async () => {
        const storedChatUsers = await AsyncStorage.getItem('chatUsers');
        
        if (storedChatUsers) {
            const parsedUsers = JSON.parse(storedChatUsers);
            setChatUsers(parsedUsers);

            
            // setlastMessage(chatUsers.lastMessage)
        }
        };
        loadChatUsers();
        }, [chatUsers]);

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
{/* 
                  {hasSearch ? (
                  filtersearch.length > 0 ? (
                    <View style={styles.flatListMainContainer}>
                      <FlatList
                        data={filtersearch}
                        // keyExtractor={(item) =>item._id.toString()}
                        renderItem={({ item }) => (
                          <TouchableOpacity style={styles.flatListContainer} onPress={() => handleNavigation(item)}>
                            <View style={[styles.profileImg]}>
                              <Text style={styles.text1}>{item.avatar}</Text>
                            </View>
                            <View style={styles.container2}>
                              <Text style={styles.text2}>{item.name}</Text>
                              <Text style={styles.text3}>
                                You: I don't remember anything
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  ) : (
                    <View style={styles.noResultContainer}>
                      <Image
                        source={Images.NoResultImg}
                        style={styles.noResultImage}
                      />
                    </View>
                  )
                ) : null} */}

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
                        navigation.navigate(ScreenNames.ChatScreen, { user : item })
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
                              { item.lastMessage  &&
                                <Text style={styles.lastMessageText}>
                                {item.lastMessage ? item.lastMessage:'Start Chat'} 
                                </Text>
                               }
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


