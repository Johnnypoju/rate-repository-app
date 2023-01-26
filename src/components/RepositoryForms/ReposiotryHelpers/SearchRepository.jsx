import { useState } from "react";
import { Searchbar } from "react-native-paper"
import { useDebouncedCallback } from "use-debounce";


const SearchRepository = ({ props }) => {
    const [ searchQuery, setSearchQuery ] = useState(props.sorting.searchKeyword);

    const changeQueryState = useDebouncedCallback((query) => {
        
            props.setSorting({ ...props.sorting, searchKeyword: query });
            
        }, 500
        );

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        changeQueryState(query);
    }

    return (
        <Searchbar 
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
}

export default SearchRepository;