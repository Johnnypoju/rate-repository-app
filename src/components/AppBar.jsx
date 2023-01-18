import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTap from './AppBarTap';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.backgroundColor.backgroundAppBar
    }
})

const AppBar = () => {
    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} backgroundColor={'appBar'}>
                <AppBarTap link={"/"} text={"Repositories"}/>
                <AppBarTap link={"/signin"} text={"Sign in"}/>
            </ScrollView>
        </View>
    );
};

export default AppBar;