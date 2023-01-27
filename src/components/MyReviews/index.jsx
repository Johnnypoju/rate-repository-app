import { FlatList } from "react-native";

import ReviewItem from "../RepositoryForms/ReviewItem";
import useMe from "../../hooks/useMe";
import ItemSeparator from "../ItemSeparator";

const MyReviews = () => {
    const { me, loading, fetchMore, refetch } = useMe(true);

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
        renderItem={({ item }) => <ReviewItem review={item} reviewHandling={true} refetch={refetch}/>}
        keyExtractor={({ id }) => id}
        onEndReached={onEndReach}
        
        ItemSeparatorComponent={ItemSeparator}
        />
    )
}

export default MyReviews;