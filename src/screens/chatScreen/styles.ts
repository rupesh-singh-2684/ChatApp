import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 15,
        // paddingVertical: 15,
    },
    headerLeft: {
        flexDirection: 'row',
    },
    backButton: {
        padding: 10,
        backgroundColor: 'white',
        height: 50,
        width: 50,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    backIcon: {
        height: 20,
        width: 20,
        tintColor: 'black',
    },
    userInfo: {
        flexDirection: 'row',
    },
    profileImgContainer: {
        borderRadius: 100,
        padding: 15,
        backgroundColor: 'brown',
        marginVertical: 20,
    },
    profileText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userDetails: {
        marginVertical: 20,
        marginHorizontal: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
    },
    notificationContainer: {
        padding: 10,
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    notificationIcon: {
        height: 20,
        width: 20,
        tintColor: 'black',
    },
    chatContainer: {
        backgroundColor: '#E7EDF3',
        flex: 1,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
    },
    inputToolbar: {
        backgroundColor: '#F8F9F9',
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionButton: {
        alignSelf: 'center',
        marginLeft: 10,
    },
    actionIcon: {
        height: 22,
        width: 22,
    },
    sendButton: {
        alignSelf: 'center',
        paddingHorizontal: 10,
    },
    sendIcon: {
        height: 40,
        width: 40,
    },
    // bottomSheet: {
    //     overflow: 'hidden',
    // },
    bottomSheetContainer: {
        borderRadius: 30,
        flex:0.7
    },
    bottomSheetWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex:1
    },
    // bottomSheetDraggableIcon: {
    //     backgroundColor: '#000',
    // },
    RBContainer: {
        paddingHorizontal: 24,
        borderRadius: 30,
        paddingTop: 20,
        flex: 1,
    },
    RBContainerItem: {
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
    eyeIcon: {
        height: 20,
        width: 26,
    },
    pinIcon: {
        height: 20,
        width: 20,
    },
    searchIcon: {
        height: 20,
        width: 20,
    },
    deleteIcon: {
        height: 20,
        width: 20,
    },
    messageView:{
        borderRadius: 10,
        maxWidth: '80%',
        marginHorizontal: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'relative',
    },
    messageText:{
        fontSize: 16,
    },
    reactionView:{
        position: 'absolute',
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        // alignItems:'flex-end'
    },
    timeTextView:{
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 10,
        color: 'black',
    }

});


export default styles;