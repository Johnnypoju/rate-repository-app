import { Pressable, StyleSheet, View, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import Text from '../Text';
import useReview from '../../hooks/useReview';




const ReviewItem = ({ review, reviewHandling, refetch }) => {
    const navigate = useNavigate();

    const styles = StyleSheet.create({
        container_rows: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.colors.white,
            flexGrow: 1,
            flexShrink: 1,
            padding: 5,
        },
        container_columns: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.colors.white,
            flexGrow: 1,
            flexShrink: 1,
            padding: 5
        },
        buttonRow: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.colors.white,
            flexGrow: 1,
            flexShrink: 1,
            padding: 5,
            justifyContent: 'center'
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

    console.log(review);

    const formattedDate = format(separateDate, 'dd.MM.yyyy');
    const [deleteReview] = useReview();

    const onPress =() => {
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel pressed'),
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: async () => {
                    await deleteReview(review.id)
                    refetch();
                }
            }
        ])
        
    };
    
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
            {reviewHandling ? 
                <View style={styles.buttonRow}>
                    <Pressable style={{paddingRight: 20}} onPress={() => navigate("/"+ review.repositoryId)}><Text type={'blueButton'}>View Repository</Text></Pressable>
                    <Pressable><Text type={'redButton'} onPress={onPress}>Delete review</Text></Pressable>
                </View>
                     : null}
        </View>
    )
}

export default ReviewItem;