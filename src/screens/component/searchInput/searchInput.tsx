import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import data from '/Users/admin/Desktop/BottomTabBar/src/data.json'
import { Icons } from "../../../assests/icons";

interface SearchInputProps {
    source: any; 
    Senddata: (data: string) => void; 
    clearChat:(data: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ source,Senddata,clearChat }) => {

    const [searchfilter , setsearchfilter] = useState('');
    const [filtersearch , setfiltersearch] = useState([]);
    const [hasSearch, setHasSearched] = useState(false);

    const [clearChatUsers, setClearChatUsers] = useState([])

    const functionfilter = (query:any)=>{
        setsearchfilter(query)
        setHasSearched(true)
        if(query){

            const filterout = data.filter(contact => contact.name.includes(query));
            setfiltersearch(filterout);
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
            <TouchableOpacity>
              <Image source={Icons.cross} style={styles.cross} />
            </TouchableOpacity>
        </View>
    );
};
export default SearchInput;
