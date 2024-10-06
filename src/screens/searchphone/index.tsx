import React, { useCallback, useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Icons } from "../../assests/icons"; // Corrected path
import SearchInput from "../component/searchInput/searchInput";
import { Images } from "../../assests/images"; // Corrected path
import styles from "./styles";

interface SearchPhoneProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const randomColor = require('randomcolor');

const SearchPhone: React.FC<SearchPhoneProps> = ({ navigation }) => {
  const [fetchdata, setdata] = useState([]);
  const [hasSearch, setHasSearched] = useState(false);
  const [filtersearch, setfiltersearch] = useState([]);

  const handleSenddata = (user: any, hasSearch: any, filtersearch: any) => {
    setdata(user);
    setHasSearched(hasSearch);
    setfiltersearch(filtersearch);
    console.log(fetchdata);
  };

  const handleNav = () => {
    navigation.navigate('Home');
  };

  const handleNavigation = useCallback((item: any) => {
    console.log(item);
    navigation.navigate('ChatScreen', { user: item });
  }, []);
 
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleNav}>
          <View style={styles.backButton}>
            <Image
              source={Icons.BackIconWhite}
              style={styles.backIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <SearchInput 
            Senddata={handleSenddata}
          />
        </View>
      </View>
      {hasSearch ? (
        filtersearch.length > 0 ? (
          <View style={styles.flatListMainContainer}>
            <FlatList
              data={filtersearch}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.flatListContainer} onPress={() => handleNavigation(item)}>
                  <View style={[styles.profileImg, { backgroundColor: randomColor() }]}>
                    <Text style={styles.text1}>{item.profileImg}</Text>
                  </View>
                  <View style={styles.container2}>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Text style={styles.text3}>
                      You: I don't remember anything
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              // keyExtractor={(item) =>item.id.toString()}
            />
          </View>
        ) : (
          <View style={styles.noResultContainer}>
            <Image
              source={Images.NoResultImg}
              style={styles.noResultImage}
            />
          </View>
        )
      ) : null}
    </SafeAreaView>
  );
};

export default SearchPhone;