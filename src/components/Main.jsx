import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
/*import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';*/


import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';
import SignIn from './SignIn';
//import { GET_AUTHENTICATED_USER } from '../graphql/queries';



const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.main,
        flexGrow: 1,
        flexShrink: 1
    },
});

const Main = () => {
    
    /*const { loading, data } = useQuery(GET_AUTHENTICATED_USER);
    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => { 
        console.log(data);
        console.log(loggedIn)}
    ), [loggedIn];

    if (loading) {
        return null
    }*/
    

    return (
        <View style={styles.container}>
            <AppBar /*loading={loading} data={data}*//>
            <Routes>
                <Route path='/' element={<RepositoryList />} exact />
                <Route path='/signin' element={<SignIn /*setLoggedIn={setLoggedIn} loggedIn={loggedIn}*//>} exact />
                <Route path='*' element={<Navigate to='/' replace />} /> 
            </Routes>
        </View> 
    );
};

export default Main;