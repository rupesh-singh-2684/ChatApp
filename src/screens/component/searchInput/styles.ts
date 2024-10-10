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
        alignItems:'center'
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
    },
    cross: {
        // marginHorizontal: 20,
        // marginVertical:30,
        height: 15,
        width: 15,
        left:15
        // position:'absolute'
    
      },
})
export default styles;