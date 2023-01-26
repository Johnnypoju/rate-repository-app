import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useMe = () => {
    
    try {
        const { loading, data, fetchMore, error, variables } = useQuery(GET_AUTHENTICATED_USER, {
            fetchPolicy: "cache-and-network",
            variables: {
                first: 5
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
    
          return { me: data?.me, loading , error, fetchMore: handleFetchMore };
      } catch (error) {
        console.log(error);
      }
      
      
      
    };

export default useMe;