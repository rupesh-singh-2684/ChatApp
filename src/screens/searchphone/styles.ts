import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
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
      cross: {
        marginHorizontal:20,
        height: 18,
        width: 18,
      },
      container2: {
        marginLeft: 10,
        justifyContent: 'space-between',
      },
      safeAreaContainer: {
        backgroundColor: '#E7EDF3',
        flex: 1,
      },
      headerContainer: {
        flexDirection: 'row',
      },
      backButton: {
        marginVertical: 20,
        marginStart: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        padding: 14,
      },
      backIcon: {
        tintColor: 'black',
        height: 20,
        width: 20,
      },
      searchInputContainer: {
        marginEnd: 20,
      },
      noResultContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      noResultImage: {
        height: 250,
        width: 220,
      },
})

export default styles;
