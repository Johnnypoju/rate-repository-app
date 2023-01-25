import { View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from '../Text';
import { styles } from '../InputFormStyles';


const SignUpForm = ({ onSubmit }) => {


    return (
        <View style={styles.container_columns} >
            <FormikTextInput name={"username"} placeholder={"Username"}/>
            <FormikTextInput name={"password"} placeholder={"Password"}/>
            <FormikTextInput name={"passwordConfirmation"} placeholder={"Password confirmation"}/>
            <Pressable onPress={onSubmit} style={{ padding: 10}}>
                <Text type={'button'}>Sign up</Text>
            </Pressable>
        </View>
    )
}

export default SignUpForm;