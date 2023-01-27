import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useMe = (props) => {
    
    try {
        const { loading, data, fetchMore, error, variables, refetch } = useQuery(GET_AUTHENTICATED_USER, {
            fetchPolicy: "cache-and-network",
            variables: {
                first: 5,
                includeReviews: props
            }
        });
    
          const handleFetchMore = () => {
            const canFetchmore = !loading && data?.me.reviews.pageInfo.hasNextPage;
    
            if(!canFetchmore) {
              return
            }
    
            fetchMore({
              variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
              },
            });
          };
    
          return { me: data?.me, loading , error, fetchMore: handleFetchMore, refetch: refetch };
      } catch (error) {
        console.log(error);
      }
      
      
      
    };

export default useMe;