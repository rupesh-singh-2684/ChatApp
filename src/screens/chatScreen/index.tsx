import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { GiftedChat, InputToolbar, Message, User } from 'react-native-gifted-chat';
import { Icons } from "../../assests/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import ReactionModal from "./component/reactionModal";
import CustomModal from "../../components/customModal";
import { Images } from "../../assests/images";

const ChatScreen: React.FC = ({ route, navigation ,}: any) => {
    // console.log(route.params)
    const user = route.params.user;
    const chatId = route.params.user.id;
    const [messages, setMessages] = useState([{}]);
    const refRBSheet: any = useRef();
    const [messageIdDelete, setMessageIdDelete] = useState<number | null>(null);
    const [reactionModal, setReactionModal] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isCustomModalVisible, setCustomModalVisible] = useState(false);
    const [inputText, setinputText] = useState('')

    useEffect(() => {
        const loadMessages = async () => {
            const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
            if (storedMessages) {
                setMessages(JSON.parse(storedMessages));
            } else {
                setMessages([{
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                }]);
            }
        };
        loadMessages();
    }, [chatId,toggle]);
    
    const storeUser = async (User: any,updatedMessages) => {
        const storedChatUsers = await AsyncStorage.getItem('chatUsers');
        const chatUsers = storedChatUsers ? JSON.parse(storedChatUsers) : [];
        // console.log(chatUsers)
        const userExists = chatUsers.find((u: any) => u.id === user.id);
        if (!userExists) {
            chatUsers.push({ id: user.id, name: user.name, avatar: user.avatar});
            await AsyncStorage.setItem('chatUsers', JSON.stringify(chatUsers));
        }
    }

    const onSend = async (messages: Message[] = []) => {
        setMessages(previousMessages => {
            const updatedMessages = GiftedChat.append(previousMessages, messages);
            AsyncStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessages));
            storeUser(user,updatedMessages);
            return updatedMessages;
            
        });
        setinputText('')
    };

    const renderActions = useCallback(() => {
        return (
            <TouchableOpacity style={styles.actionButton}>
                <Image source={Icons.addPhone} style={styles.actionIcon} />
            </TouchableOpacity>
        );
    }, []);
    
    const renderMessage = (props:any) => {
        const { currentMessage } = props;
        const isUserMessage = currentMessage.user._id === 1;
        const messageTime = new Date(currentMessage.createdAt).toLocaleTimeString([],
            { hour: '2-digit', minute: '2-digit' });
        return (
            <>
            <TouchableOpacity
              onLongPress={() => onLongPress(props.currentMessage)}
              style={[ styles.messageView ,{
                  alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
                  backgroundColor: isUserMessage ? '#0084ff' : '#f0f0f0',
                }]}
                >
              <Text style={[ styles.messageText,{color: isUserMessage ? 'white' : 'black'}]}>
                {currentMessage.text}
              </Text>

              {currentMessage.reaction && (
                <View style={[ styles.reactionView,{right: isUserMessage ? 0 : 'auto',top :isUserMessage ? '100%':'100%'}]}>
                  <Text style={{ color: isUserMessage ? 'white' : 'black' ,}}>
                    {currentMessage.reaction}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <Text style={[ styles.timeTextView,{textAlign: isUserMessage ? 'right' : 'left'}]}>
              {messageTime}
            </Text>
          </>
        );
    };
    
    const onLongPress = (message: any) => {
        // console.log(message)
        setMessageIdDelete(message._id);
        // console.log('id is', message)
        setReactionModal(true);
    };

    const handleDeletes = async (id: number) => {
        // console.log('id is', id);

        const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
        const messagesArray = storedMessages ? JSON.parse(storedMessages) : [];

        if (Array.isArray(messagesArray)) {
            const updatedMessagesArray = messagesArray.filter(
                (message) => message._id !== id
            );
            await AsyncStorage.setItem(
                `messages_${chatId}`,
                JSON.stringify(updatedMessagesArray)
            );
            setMessages(updatedMessagesArray);
            setToggle(!toggle);
        } else {
            console.error("Parsed messages is not an array:", messagesArray);
        }
    };
    const openCustomModal = () => {
        setCustomModalVisible(true);
        closeReactionModal();
    };
    const closeCustomModal = () => {
        setCustomModalVisible(false);
    };
    const closeReactionModal = () => {
        setReactionModal(false);
    };

    
    const onEmojiPress = async(emoji:string) => {
        if (messageIdDelete) {
            setMessages((previousMessages) => {
              const updatedMessages = previousMessages.map((message) => {
                if (message._id === messageIdDelete) {
                  return {
                    ...message,
                    reaction: message.reaction === emoji ? null : emoji,
                  };
                }
                return message;
              });
              AsyncStorage.setItem(`messages_${chatId}`,JSON.stringify(updatedMessages));
              return updatedMessages;
            });
          }
        closeReactionModal();
    };

    const renderSend = (props: any) => {
        return (
            <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                    const messageText =inputText.trim();
                    if (messageText && messageText.trim())
                    onSend();
                    props?.onSend([{
                        _id: 1,
                        text: props?.text,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                        },
                    }]);
                    setinputText('')
                }}>
                <Image source={Icons.send} style={styles.sendIcon} />
            </TouchableOpacity>
        );
    };
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backButton}>
                                <Image source={Icons.BackIconWhite} style={styles.backIcon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.userInfo}>
                            <View style={styles.profileImgContainer}>
                                <Text style={styles.profileText}>{user.avatar}</Text>
                            </View>
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>{user.name}</Text>
                                <Text>Clocked In</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                        <View style={styles.notificationContainer}>
                            <Image source={Icons.VerticalThreeDots} style={styles.notificationIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.chatContainer}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{ _id: 1, name: 'Current User' }}
                    placeholder="Message..."
                    alignTop={true}
                    onInputTextChanged={setinputText}
                    text={inputText}
                    // loadEarlier={true}
                    textInputStyle={styles.textInput}
                    renderInputToolbar={props => (
                        <InputToolbar
                            containerStyle={styles.inputToolbar}
                            {...props}
                        />
                    )}
                    renderActions={renderActions}
                    renderMessage = {renderMessage}
                    renderSend={renderSend}
                    onLongPress={onLongPress}
                />
            </View>
            <RBSheet
                ref={refRBSheet}
                // height={Dimensions.get('window').height / 2.5}
                useNativeDriver={false}
                dragOnContent={true}
                customStyles={{
                    container: styles.bottomSheetContainer,
                    wrapper: styles.bottomSheetWrapper,
                }}>
                <View style={styles.RBContainer}>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.eyeIcon} style={styles.eyeIcon} />
                        <Text style={styles.RBtext}>View details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.pinIcon} style={styles.pinIcon} />
                        <Text style={styles.RBtext}>Pin Chart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.SearchIcon} style={styles.searchIcon} />
                        <Text style={styles.RBtext}>Search Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.deleteIcon} style={styles.deleteIcon} />
                        <Text style={styles.RBtext}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
            <ReactionModal
                visible={reactionModal}
                closeModal={closeReactionModal}
                onEmojiPress={onEmojiPress}
                onDeletePress={openCustomModal}
            />
            <CustomModal
                visible={isCustomModalVisible}
                title="Delete Message?"
                description="Are you sure to delete this message?"
                imageSource={Icons.deleteIcon}
                buttonText="Yes, Delete"
                secondButtonText="Cancel"
                closeModal={() => setCustomModalVisible(false)}
                onButtonPress={() => {
                    if (messageIdDelete) {
                        handleDeletes(messageIdDelete);
                    }
                    closeCustomModal();
                }}
                onSecondButtonPress={() => {
                    setCustomModalVisible(false);
                }}
            />
        </>
    );
};

export default ChatScreen;

