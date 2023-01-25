import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View, Pressable } from "react-native";
import { useNavigate } from 'react-router-native';

import { styles } from '../InputFormStyles';
import Text from "../Text";
import SingInValidationSchema from "../../utils/SignInValidationSchema";
import useSignIn from "../../hooks/useSignIn";


const initialValues = {
    username: "",
    password: ""
};



const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container_columns} >
            <FormikTextInput name={"username"}/>
            <FormikTextInput name={"password"}/>
            <Pressable onPress={onSubmit} style={{ padding: 10}}>
                <Text type={'button'}>Sign in</Text>
            </Pressable>
        </View>
    )
}

export const SignInContainer = ({ onSubmit }) => {
    

    return (<>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SingInValidationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
    </>
    );
}

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        

        try {
            const { authenticate } = await signIn({ username, password});
            if(authenticate){
                console.log("User log in successful")
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return <SignInContainer onSubmit={onSubmit}/>
};

export default SignIn;