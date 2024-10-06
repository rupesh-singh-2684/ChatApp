import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#E7EDF3',
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    noChatsText: {
        fontSize: 16,
        fontWeight: '700',
    },
    box: {
        alignItems: "center",
        justifyContent: "center",
      },
      chatUser: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      chatUserName: {
        fontSize: 16,
      },
      box1:{
        flexDirection:'row',
        gap:10,
        margin:10,
        padding:10,
    borderBottomWidth:1,
            borderBottomColor:'#CCCCCC'
      
      },
      lastMessageText: {
        fontSize: 12,
        color: 'gray', 
      },
      userInfo: {
        marginLeft: 10, 
        flex: 1,
      },
      profileSection: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        paddingTop: 50
    
    },
    profilePictureContainer: {
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    
    
    },
    profilePicture: {
        width: 50, 
        height: 50,
        borderRadius: 25, 
        backgroundColor: '#007AFF',
        justifyContent: 'center', 
        alignItems: 'center', 
        overflow: 'hidden', 
      },
      profileText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold',
        textAlign: 'center',
      },
      text:{
        fontWeight:'bold',
        alignSelf:'flex-start',
        fontSize:20,
        marginBottom:10,
      
          },
          listContainer: {
            padding: 5,
            alignContent: 'space-between',
            backgroundColor: '#F8F9F9',
            margin: 20,
            borderRadius: 10,
            width:'90%'
          },
});
export default styles;