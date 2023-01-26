//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting) => {
  console.log(sorting);
  try {
      const { loading, error, data, fetchMore, variables } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
          orderBy: sorting.orderBy,
          orderDirection: sorting.orderDirection,
          searchKeyword: sorting.searchKeyword,
          first: sorting.first
        }
        
      });

      const handleFetchMore = () => {
        const canFetchmore = !loading && data?.repositories.pageInfo.hasNextPage;

        if(!canFetchmore) {
          return
        }

        fetchMore({
          variables: {
            after: data.repositories.pageInfo.endCursor,
            ...variables,
          },
        });
      };

      return { repositories: data?.repositories, loading ,error, fetchMore: handleFetchMore };
  } catch (error) {
    console.log(error);
  }
  
  
  
};

export default useRepositories;