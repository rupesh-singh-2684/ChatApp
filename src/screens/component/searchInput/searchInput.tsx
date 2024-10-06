import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Image } from "react-native";
import styles from "./styles";
import data from '/Users/admin/Desktop/BottomTabBar/src/data.json'

interface SearchInputProps {
    source: any; 
    Senddata: (data: string) => void; 

}
const SearchInput: React.FC<SearchInputProps> = ({ source,Senddata }) => {
    const [searchfilter , setsearchfilter] = useState('');
    const [filtersearch , setfiltersearch] = useState([]);
    const [hasSearch, setHasSearched] = useState(false);
    const functionfilter = (query:any)=>{
        setsearchfilter(query)
        setHasSearched(true)
        if(query){
            
            const filterme = data.filter(contact => contact.name.includes(query));
            setfiltersearch(filterme);
        }else{
            setfiltersearch([]);
        }
    }
    return (
        <View style={styles.container}>
            <Image 
                source={source}
                style={styles.img}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Search messages..."
                onChangeText={(text)=>[functionfilter(text), Senddata(data,hasSearch,filtersearch)]}
            />
        </View>
    );
};
export default SearchInput;
