import { View, StyleSheet, Image} from "react-native";
import theme from "../theme";
import Text from "./Text";
import ValueModifier from "./ValueModifier";

const RepositoryItem = ({ props }) => {

    const styles = StyleSheet.create({
        container_rows: {
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            flexGrow: 1,
            flexShrink: 1
        },
        container_columns: {
            display: 'flex',
            flexDirection: 'row',
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
    //console.log(props.stargazersCount);
    const stargazersCount = ValueModifier(props.stargazersCount);
    const forks = ValueModifier(props.forksCount);
    const reviews = ValueModifier(props.reviewCount);

    return (
        <View >
            <View style={styles.container_columns}>
                <Image style={styles.image} source={{uri: uri}}/>
                <View style={styles.paddedLeft}>
                    <Text fontWeight={'bold'}>{props.fullName}</Text>
                    <Text color={'textSecondary'}>{props.description}</Text>
                    <Text backgroundColor={'languages'}>{props.language} </Text>
                </View>
            </View>
            
            <View style={styles.container_columns}>
                <View style={styles.container_rows}>
                    <Text type={'stats'}>{stargazersCount} </Text>
                    <Text type={'description'}>Stars</Text> 
                </View>
                <View style={styles.container_rows}>
                    <Text type={'stats'}>{forks} </Text>
                    <Text type={'description'}>Forks</Text>
                </View>
                <View style={styles.container_rows}>
                    <Text type={'stats'}>{reviews} </Text>
                    <Text type={'description'}>Reviews</Text>
                </View>
                <View style={styles.container_rows}>
                    <Text type={'stats'}>{props.ratingAverage} </Text>
                    <Text type={'description'}>Rating</Text>
                </View>
                
            </View>
            
        </View >
    )
}

export default RepositoryItem;