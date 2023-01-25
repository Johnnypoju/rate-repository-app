import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../../hooks/useRepositories';

import { useNavigate } from 'react-router-native';
import { useState } from 'react';


const initialState = {
  orderBy: "CREATED_AT",
  orderDirection: "DESC",
  label: "latest"
}

const RepositoryList = () => {

  const [ sorting, setSorting ] = useState(initialState);
  
  const { loading, repositories } = useRepositories(sorting);

  const navigate = useNavigate(); 
  if(loading) {
    return null
  }

  return (
    <RepositoryListContainer repositories={repositories} navigate={navigate} sorting={sorting} setSorting={setSorting}/>
  );
};

export default RepositoryList;