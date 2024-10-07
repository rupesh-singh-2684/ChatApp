import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:.3,
        // padding:15,
        margin:20,
        backgroundColor:'white',
        borderRadius:8,
        borderColor:'white',

        // shadowOpacity:0.5,
        // shadowOffset:{
        //     width:0,
        //     height:0.5
        // },
        // shadowRadius:2
    },
    searchInput:{
        borderWidth:.3,
        padding:15,
        // margin:20,
        backgroundColor:'white',
        borderRadius:8,
        borderColor:'white',
        width:'80%',
        marginHorizontal:5,
    },
    img:{
        alignSelf: 'center', 
        marginVertical: 10, 
        marginStart: 10
    }
})
export default styles;