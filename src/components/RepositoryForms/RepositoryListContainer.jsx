import { FlatList, Pressable, StyleSheet } from 'react-native';

import ItemSeparator from "../ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import SortRepository from "./ReposiotryHelpers/SortRepository";
import SearchRepository from './ReposiotryHelpers/SearchRepository';

const styles = StyleSheet.create({
  
    flexItems: {
      display: 'flex'
    },
  
  });

const RepositoryListContainer = ({
  repositories, navigate, sorting, setSorting, onEndReach
  }) => {
   
    
     
    const onPress = (id) => {
      navigate("/"+id);
    };

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    const sortingAndSearch = {
      sorting,
      setSorting,
    };

    
    return (<>
      
      <FlatList
        style={styles.flexItems}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={(
          <>
          <SearchRepository props={sortingAndSearch}/>
          <SortRepository props={sortingAndSearch} />
          </>
        )}
        renderItem={({ item }) => (
          <Pressable onPress={(()=> onPress(item.id))}>
            <RepositoryItem key={item.key} props={item} single={false}/>
          </Pressable>
        )}
      />
      </>
    );
  };

export default RepositoryListContainer;