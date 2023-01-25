import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import { GET_SINGLE_REPO } from '../../graphql/queries';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const RepositorySingle = () => {
    const { loading, data } = useQuery(GET_SINGLE_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: useParams().id
        }
    });
    

    if (loading) {
        return null;
    }

    const reviewNodes = data.repository.reviews
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];
    
    console.log(data.repository.reviews);
    return (
        <FlatList 
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <>
            <RepositoryItem props={data.repository} single={true}/>
            <ItemSeparator />
        </>}
        ItemSeparatorComponent={ItemSeparator}
        />
    );
}

export default RepositorySingle;