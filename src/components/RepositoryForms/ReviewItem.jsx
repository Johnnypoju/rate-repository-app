import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import theme from '../../theme';
import Text from '../Text';


const ReviewItem = ({ review }) => {

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
            paddingLeft: 10,
            flexShrink: 1
        },
        ratingBubble: {
            backgroundColor: theme.colors.white,
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            fontSize: 17,
            width: 40,
            height: 40,
            alignSelf: 'flex-start',
            textAlign: 'center',
            padding: 3,
            borderWidth: 2,
            borderRadius: 40/2,
            backgroundRadius: theme.colors.backgroundRadius,
            
    
        }
        
    })
    const splittedDate = review.createdAt.split('T');
    const separateDate = new Date(splittedDate[0]);

    console.log(splittedDate);
    console.log(separateDate);

    const formattedDate = format(separateDate, 'dd.MM.yyyy');
    
    return (
        <View testID="repositoryItem">
            <View style={styles.container_rows}>
                <View style={styles.ratingBubble} >
                    <Text type={'ratingText'} testID="reviewRating">{review.rating}</Text>
                </View>
                <View style={styles.paddedLeft}>
                    <Text fontWeight={'bold'} testID="userName">{review.user.username}</Text>
                    <Text color={'textSecondary'} testID="createdAt">{formattedDate}</Text>
                    <Text testID="reviewText">{review.text} </Text>
                </View>
            </View>
                
        </View>
    )
}

export default ReviewItem;