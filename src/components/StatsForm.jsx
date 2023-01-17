import ValueModifier from "./ValueModifier";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const StatsForm = ({props}) => {

    const styles = StyleSheet.create(
        {
            container_rows: {
                display: 'flex',
                flexDirection: 'column',
                padding: 10,
                flexGrow: 1,
                flexShrink: 1
            },
        }
    )
    
    // rounding values 
    const stargazersCount = ValueModifier(props.stargazersCount);
    const forks = ValueModifier(props.forksCount);
    const reviews = ValueModifier(props.reviewCount);

    return (
        <>
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
        </>
    )
}

export default StatsForm;