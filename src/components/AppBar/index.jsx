import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';

import Constants from 'expo-constants';
import AppBarTap from './AppBarTap';
import theme from '../../theme';
import useAuthStorage from '../../hooks/useAuthStorage';
import useMe from '../../hooks/useMe';



const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.backgroundColor.backgroundAppBar
    }
})



const AppBar = (/*{ loading, data }*/) => {
    const { me, loading } = useMe();

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
                {me ? 
                    <>
                        <AppBarTap link={"/createReview"} text={"Create a review"} />
                        <AppBarTap link={"/:id/myReviews"} text={"My reviews"} />
                        <AppBarTap link={"/"} text={"Sign out"} onPress={handleSignOut}/> 
                    </>
                    : 
                    <>
                        <AppBarTap link={"/signin"} text={"Sign in"}/>
                        <AppBarTap link={"/singup"} text={"Sign up"}/>
                    </>
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;