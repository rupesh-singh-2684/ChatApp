import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0086C5',
    },
    containerView:{
        flexDirection: 'row', justifyContent: 'space-between' 
    },
   backIcon:{
    height:50,
    width:50,
    marginVertical:20,
    marginStart:20
   },
   addIcon:{
    height:30,
    width:30,
    marginVertical:5,
    marginHorizontal:5
   },
   addView:{
    marginVertical:25,
    marginHorizontal:20,
    borderRadius:8,
    backgroundColor:'white',
    // shadowOpacity:0.5,
    //     shadowOffset:{
    //         width:0,
    //         height:0.5
    //     },
    //     shadowRadius:2,
   },
   textContainer:{
    marginHorizontal: 40,
    marginVertical:20
   },
   title:{
    fontSize: 18, 
    color: 'white', 
    fontWeight: '600', 
    marginBottom: 10 
   },
   contact:{
    fontSize: 13,
    color: 'white'
   }
})
export default styles;