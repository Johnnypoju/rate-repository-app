import { Picker } from "@react-native-picker/picker";


const SortRepository = ({ props }) => {

    const sortingValues = {
        latest: {
            orderBy: "CREATED_AT",
            orderDirection: "DESC",
            searchKeyword: props.sorting.searchKeyword,
            label: "latest"
        },
        highest: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "DESC",
            searchKeyword: props.sorting.searchKeyword,
            label: "highest"
        },
        lowest: {
            orderBy: "RATING_AVERAGE",
            orderDirection: "ASC",
            searchKeyword: props.sorting.searchKeyword,
            label: "lowest"
        }
    }

   return ( <Picker 
          selectedValue={props.sorting.label}
          onValueChange={(itemValue) => {
              switch(itemValue){
                  case "latest":
                      props.setSorting(sortingValues.latest);
                      break;
                  case "highest":
                      props.setSorting(sortingValues.highest);
                      break;
                  case "lowest":
                      props.setSorting(sortingValues.lowest);
                      break;
              }
            }
          }>
              <Picker.Item label="Latest repositories" value="latest" />
              <Picker.Item label="Highest rated repositories" value="highest" />
              <Picker.Item label="Lowest rated repositories" value="lowest" />
           
            </Picker>);
}

export default SortRepository;