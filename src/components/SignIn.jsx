import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Text from "./Text";
import SingInValidationSchema from "../utils/SignInValidationSchema";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: "",
    password: ""
};

const styles = StyleSheet.create({
    container_columns: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.white
    }
    
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container_columns} >
            <FormikTextInput name={"username"}/>
            <FormikTextInput name={"password"} style={'secureText'}/>
            <Pressable onPress={onSubmit} style={{ padding: 10}}>
                <Text type={'signIn'}>Sign in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password});
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (<>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SingInValidationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
    </>
    );
};

export default SignIn;