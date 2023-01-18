import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { View , StyleSheet, Pressable} from "react-native";
import theme from "../theme";
import Text from "./Text";

const initialValues = {
    username: "",
    password: ""
};

const styles = StyleSheet.create({
    container_columns: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.main,
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

const SignInForm = ({ onSubmit }) => {
    return (
        <View styles={styles.container_columns}>
            <FormikTextInput name={"username"}/>
            <FormikTextInput name={"password"} style={'secureText'}/>
            <Pressable onPress={onSubmit} style={{ padding: 10}}>
                <Text type={'signIn'}>Sign in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    };
    return (<>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
    </>
    );
};

export default SignIn;