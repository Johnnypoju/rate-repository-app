import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient, useQuery } from '@apollo/client';

import Constants from 'expo-constants';
import AppBarTap from './AppBarTap';
import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';



const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.backgroundColor.backgroundAppBar
    }
})



const AppBar = (/*{ loading, data }*/) => {
    const { loading, data } = useQuery(GET_AUTHENTICATED_USER);

    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
   
    if (loading) {
        return null;
    }

    const handleSignOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };

    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} backgroundColor={'appBar'}>
                <AppBarTap link={"/"} text={"Repositories"}/>
                {data.me ? <AppBarTap link={"/"} text={"Sign out"} onPress={handleSignOut}/> 
                : <AppBarTap link={"/signin"} text={"Sign in"}/> }
            </ScrollView>
        </View>
    );
};

export default AppBar;