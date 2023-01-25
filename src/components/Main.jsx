import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryForms/RepositoryList';
import theme from '../theme';
import SignIn from './Signin';
import RepositorySingle from './RepositoryForms/RepositorySingle';
import CreateReview from './CreateReview';
import SignUp from './SignUp';



const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.main,
        flexGrow: 1,
        flexShrink: 1
    },
});

const Main = () => {
        

    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} exact />
                <Route path='/signin' element={<SignIn />} exact />
                <Route path='/singup' element={<SignUp />} exact/>
                <Route path='/:id' element={<RepositorySingle />} exact/>
                <Route path='/createReview' element={<CreateReview />} exact/>
                <Route path='*' element={<Navigate to='/' replace />} /> 
            </Routes>
        </View> 
    );
};

export default Main;