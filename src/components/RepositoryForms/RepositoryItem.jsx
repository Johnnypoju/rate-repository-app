import { View, StyleSheet, Image} from "react-native";
import theme from "../../theme";
import Text from "../Text";
import StatsForm from "./StatsForm";
import * as Linking from 'expo-linking';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const RepositoryItem = ({ props, single }) => {

    
    const styles = StyleSheet.create({
        container_rows: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.colors.white,
            flexGrow: 1,
            flexShrink: 1,
            padding: 5
        },
        container_columns: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.colors.white,
            flexGrow: 1,
            flexShrink: 1,
            padding: 5
        },
        entry: {
            flexGrow: 1,
            flexShrink: 1
            
        },
        paddedLeft: {
            paddingLeft: 10
        },
        image: {
            height: 50,
            width: 50,
            borderRadius: 20,
            padding: 10
        }
        
    })
    const uri = props.ownerAvatarUrl;
    

    return (
        <View testID="repositoryItem">
            <View style={styles.container_rows}>
                <Image style={styles.image} source={{uri: uri}}/>
                <View style={styles.paddedLeft}>
                    <Text fontWeight={'bold'} testID="fullName">{props.fullName}</Text>
                    <Text color={'textSecondary'} testID="description">{props.description}</Text>
                    <Text backgroundColor={'roundedBlue'} testID="language">{props.language} </Text>
                </View>
            </View>
            <View style={styles.container_columns}>
                <View style={styles.container_rows}>
                    <StatsForm props={props} />
                    
                </View>
                {single ?
                    <Pressable onPress={() => Linking.openURL(props.url)}>
                        <Text type={'button'}>Open in Github</Text>
                    </Pressable>                   
                    : null}
                    
            </View>
            
            
        </View >
    )
}

export default RepositoryItem;