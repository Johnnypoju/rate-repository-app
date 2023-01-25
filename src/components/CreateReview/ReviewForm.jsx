import FormikTextInput from "./FormikTextInput";
import { View, Pressable } from 'react-native';
import { styles } from '../InputFormStyles';
import Text from "../Text";


const ReviewForm = ({ onSubmit }) => {
    

    return (
        <View style={styles.container_columns}>
            <FormikTextInput name={'ownerName'} placeholder={'Repository owner name'}/>
            <FormikTextInput name={'repositoryName'} placeholder={'Repository name'} />
            <FormikTextInput name={'rating'} placeholder={'Rating between 0 to 100'} />
            <FormikTextInput name={'text'} placeholder={'Review'} multiline={true} />
            <Pressable style={{ padding: 10}} onPress={onSubmit}>
                <Text type={'button'}>Create a Review</Text>
            </Pressable>
        </View>
    )
}

export default ReviewForm;