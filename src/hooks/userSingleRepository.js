import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPO } from '../graphql/queries';

const useSingleRepository = (sorting) => {
  console.log(sorting);
  try {
    const { loading, error, data, fetchMore, variables } = useQuery(GET_SINGLE_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: useParams().id,
            first: 5
        }
    });

      const handleFetchMore = () => {
        const canFetchmore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if(!canFetchmore) {
          return
        }

        fetchMore({
          variables: {
            after: data.repository.reviews.pageInfo.endCursor,
            ...variables,
          },
        });
      };

      return { repository: data?.repository, loading , error, fetchMore: handleFetchMore };
  } catch (error) {
    console.log(error);
  }
  
  
  
};

export default useSingleRepository;