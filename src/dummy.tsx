import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icon from '../../assets/icon/index';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Message = ({route}) => {
  // const user=route.params.name;
  // console.log('ii',route.params);
  const user=route.params.data;
  // console.log('aaa',route.params.data);
  
  // console.log('ooo',user);
  // console.log('uuuu',route);
  
  
  // console.log(route.params.id)
  const {color, profileImg, name,id} = route.params.data;
  // console.log('sss',route.params.data);
  
  const chatId = route.params.data.id; 
  // console.log('hhh',chatId);
  
  const [messages, setMessages] = useState([{}]);
  const refRBSheet = useRef();

 

  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await AsyncStorage.getItem(messages_${chatId});
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        setMessages([
          {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "React Native",
              avatar: "https://placeimg.com/140/140/any"
            }
          }
        ]);
      }
    };

    loadMessages();
  }, [chatId]);

  //   const initialMessages = [
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ];
  //   setMessages(initialMessages);
  // }, []);

  const onSend = async (newMessages: IMessage[] = []) => {

    setMessages((previousMessages) => {
      const updatedMessages = GiftedChat.append(previousMessages, newMessages);
      AsyncStorage.setItem(messages_${chatId}, JSON.stringify(updatedMessages));
    storeChatUser(user);
    console.log(updatedMessages)
      // console.log('dddd',user);
      return updatedMessages; 
    });
  };

  const storeChatUser = async (User) => {
    // console.log('rrrrrrrtrtrtr');
    
    const storedChatUsers = await AsyncStorage.getItem('chatUsers');
    // console.log('Sejal',storedChatUsers);
        
    const chatUsers = storedChatUsers ? JSON.parse(storedChatUsers) : [];   
    // console.log('kjsdbvjbdfjvbdfnbv',chatUsers);
    //  console.log('kk',chatUser);
    
    const userExists = chatUsers.find((u) => u._id === User._id);
    // console.log(userExists)
    if (!userExists) {
      chatUsers.push({ _id: User.id, name: User.name ,avatar:User.profileImg });
      await AsyncStorage.setItem('chatUsers', JSON.stringify(chatUsers));
      // console.log('yy',chatUsers);
      
    }
  };

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity style={{alignSelf: 'center', marginLeft: 10}}>
        <Image source={icon.plusmessage} style={styles.plusmessage} />
      </TouchableOpacity>
    );
  }, []);

  const renderSend = (props) => {
    // console.log('propsrenderSend', props)
    return (
      <TouchableOpacity
        style={{alignSelf: 'center', paddingHorizontal: 10}}
        onPress={() => {
          onSend();
          props?.onSend([
            {
              _id: 1,
              text: props?.text,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ])
          messages => onSend(messages);
        }}>
        <Image source={icon.sendicon} style={styles.sendicon} />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View style={styles.backButton}>
              <Image source={icon.backarrowblack} style={styles.backArrow} />
            </View>
            <View style={styles.userInfo}>
              <View style={[styles.profileImg, {backgroundColor: color}]}>
                <Text style={styles.profileText}>{profileImg}</Text>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>Clocked in</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.notificationContainer}
            onPress={() => refRBSheet.current.open()}>
            <Image source={icon.dot} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
         onSend={messages => onSend(messages)}
          user={{_id: 1}}
          placeholder="Message..."
          textInputStyle={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 10,
          }}
          renderInputToolbar={props => {
            return (
              <InputToolbar
                containerStyle={{
                  backgroundColor: '#F8F9F9',
                  paddingBottom: 50,
                  paddingTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                {...props}
              />
            );
          }}
          renderActions={renderActions}
          renderSend={renderSend}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        height={Dimensions.get('window').height / 2.5}
        useNativeDriver={false}
        dragOnContent={true}
        style={{overflow: 'hidden'}}
        customStyles={{
          container: {
            borderRadius: 30,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={styles.RBContainer}>
          <TouchableOpacity style={styles.RBContainer2}>
            <Image source={icon.eye} style={styles.eye} />
            <Text style={styles.RBtext}>View details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.RBContainer2}>
            <Image source={icon.pin} style={styles.pin} />
            <Text style={styles.RBtext}>Pin Chart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.RBContainer2}>
            <Image source={icon.search} style={styles.search} />
            <Text style={styles.RBtext}>Search Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.RBContainer2}>
            <Image source={icon.deleteimage} style={styles.delete} />
            <Text style={styles.RBtext}>Delete</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#F8F9F9',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#E7EDF3',
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    height: 20,
    width: 20,
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  profileImg: {
    borderRadius: 100,
    padding: 13,
  },
  profileText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    color: '#838D95',
    fontWeight: '600',
    marginBottom: 2,
  },
  userStatus: {
    fontSize: 13,
    color: '#838D95',
    fontWeight: '300',
  },
  notificationContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  notificationIcon: {
    height: 20,
    width: 20,
  },
  plusmessage: {
    height: 22,
    width: 22,
  },
  sendicon: {
    height: 40,
    width: 40,
  },
  RBContainer: {
    paddingHorizontal: 24,
    borderRadius: 30,
    paddingTop: 20,
    flex: 1,
  },
  RBContainer2: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  RBtext: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  eye: {
    height: 20,
    width: 26,
  },
  pin: {
    height: 25,
    width: 18,
    marginLeft: 4,
  },
  search: {
    height: 25,
    width: 24,
    marginLeft: 4,
  },
  delete: {
    height: 25,
    width: 24,
    marginLeft: 4,
  },
});