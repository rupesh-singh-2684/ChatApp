import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginSide: {
    marginTop:36,
    marginHorizontal: 24,
    flexDirection:'row',
    // alignSelf:'center'
  },
 img:{
  height: 35, width: 35, marginHorizontal: 10 
 },
 text:{
  alignSelf: 'center', fontSize: 16 
 },
 wrapper: {
  backgroundColor: 'rgba(0,0,0,0.5)',
},
container: {
  borderRadius: 20,
},
  
});
export default styles;