import { Picker } from "@react-native-picker/picker";
import { FlatList, Pressable, StyleSheet } from 'react-native';

import ItemSeparator from "../ItemSeparator";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  
    flexItems: {
      display: 'flex'
    },
  
  });

const RepositoryListContainer = ({repositories, navigate, sorting, setSorting}) => {
   
    const sortingValues = {
        latest: {
            orderBy: "CREATED_AT",
            orderDirection: "DESC",
            label: "latest"
        },
        highest: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "DESC",
            label: "highest"
        },
        lowest: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "ASC",
            label: "lowest"
        }
    }
     
    const onPress = (id) => {
      navigate("/"+id);
    };

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    console.log(sorting);
    
    return (<>
      <Picker 
        selectedValue={sorting.label}
        onValueChange={(itemValue) => {
            switch(itemValue){
                case "latest":
                    setSorting(sortingValues.latest);
                    break;
                case "highest":
                    setSorting(sortingValues.highest);
                    break;
                case "lowest":
                    setSorting(sortingValues.lowest);
                    break;
            }
          }
        }>
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highest" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
         
          </Picker>
      <FlatList
        style={styles.flexItems}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
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