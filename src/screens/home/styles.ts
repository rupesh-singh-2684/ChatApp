import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

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
        margin:5,
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
        backgroundColor: colors.black,
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
        fontWeight:'500',
        alignSelf:'flex-start',
        fontSize:20,
        marginBottom:10,
      
      },
      listContainer: {
        padding: 5,
        alignContent: 'space-between',
        margin: 20,
        backgroundColor: '#F8F9F9',
        width:'90%',
        borderRadius: 10,
      },




      flatListMainContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
      },
      flatListContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBlockColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      profileImg:{
        borderRadius: 100,
        padding:15,
      },
      text1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
      text2: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500',
      },
      text3: {
        fontSize: 13,
        fontWeight: '400',
        color: '#85929C',
      },
      container2: {
        marginLeft: 10,
        justifyContent: 'space-between',
      },

      });
export default styles;