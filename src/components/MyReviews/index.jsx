import { FlatList } from "react-native";

import ReviewItem from "../RepositoryForms/ReviewItem";
import useMe from "../../hooks/useMe";
import ItemSeparator from "../ItemSeparator";

const MyReviews = () => {
    const { me, loading, fetchMore } = useMe();

    const reviewNodes = me
    ? me.reviews.edges.map(edge => edge.node)
    : [];
    
    if(loading) {
        return null
    }

    const onEndReach = () => {
        fetchMore();
    }

    return (
        <FlatList 
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        onEndReached={onEndReach}
        /*ListHeaderComponent={() => <>
            <RepositoryItem props={repository} single={true}/>
            <ItemSeparator />
        </>}*/
        ItemSeparatorComponent={ItemSeparator}
        />
    )
}

export default MyReviews;