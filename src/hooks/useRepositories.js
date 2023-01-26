//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting) => {
  console.log(sorting);
  try {
      const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
          orderBy: sorting.orderBy,
          orderDirection: sorting.orderDirection,
          searchKeyword: sorting.searchKeyword
        }
        
      });

      return { repositories: data?.repositories, loading ,error };
  } catch (error) {
    console.log(error);
  }
  
  
  
};

export default useRepositories;