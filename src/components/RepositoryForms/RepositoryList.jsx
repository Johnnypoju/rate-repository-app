import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../../hooks/useRepositories';

import { useNavigate } from 'react-router-native';
import { useState } from 'react';


const initialState = {
  orderBy: "CREATED_AT",
  orderDirection: "DESC",
  label: "latest",
  searchKeyword: "",
  first: 20
}

const RepositoryList = () => {

  const [ sorting, setSorting ] = useState(initialState);
  const { loading, repositories, fetchMore } = useRepositories(sorting);
  const navigate = useNavigate(); 

  if(loading) {
    return null
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer onEndReach={onEndReach} repositories={repositories} navigate={navigate} sorting={sorting} setSorting={setSorting} />
  );
};

export default RepositoryList;