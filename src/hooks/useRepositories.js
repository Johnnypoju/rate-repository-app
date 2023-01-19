//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  try {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network'
    });
    return { repositories: data?.repositories, loading ,error };
  } catch (error) {
    console.log(error);
  }
  
  
  
};

export default useRepositories;