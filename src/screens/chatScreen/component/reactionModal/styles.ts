import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    optionContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
    },
    modalOptionText: {
        fontSize: 16,
        color: colors.black,
        paddingVertical: 10,
        textAlign: 'center',
        marginLeft: 20,
    },
    modalOptionText1: {
        fontSize: 16,
        color: colors.red,
        paddingVertical: 10,
        textAlign: 'center',
        marginLeft: 20,
    },
    
    optionIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    emoji:{
        flexDirection:'row',
        padding: 26,
        backgroundColor: colors.white,
        borderRadius:20,
        width: '100%',
        alignItems: 'center',
       justifyContent:'space-between',
       margin:10
    
    },
    emojiIcon:{
       
            width: 35,
            height: 35,
            marginRight: 10,
        
    }
});

export default styles;