import { FlatList } from 'react-native';
import useSingleRepository from '../../hooks/userSingleRepository';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const RepositorySingle = () => {

    const { repository, loading, fetchMore } = useSingleRepository();
    
    if (loading) {
        return null;
    }

    const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
        fetchMore();
      };
    
    console.log(repository.reviews);
    return (
        <FlatList 
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} reviewHandling={false} />}
        keyExtractor={({ id }) => id}
        onEndReached={onEndReach}
        ListHeaderComponent={() => <>
            <RepositoryItem props={repository} single={true}/>
            <ItemSeparator />
        </>}
        ItemSeparatorComponent={ItemSeparator}
        />
    );
}

export default RepositorySingle;