import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTap from './AppBarTap';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        backgroundColor: theme.backgroundColor.backgroundAppBar
    },
    flexItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    }
})

const AppBar = () => {
    return (
        <View style={styles.container} >
            <View style={styles.flexItems} backgroundColor={'appBar'}>
                <AppBarTap link={"/"} text={"Repositories"}/>
                <AppBarTap link={"/sigin"} text={"Sign in"}/>
            </View>
        </View>
    );
};

export default AppBar;