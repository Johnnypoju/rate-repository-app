import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { Formik } from "formik";

import SingUpValidationSchema from '../../utils/SingUpValidationSchema';
import SignUpForm from "./SignUpForm";
import { CREATE_USER } from "../../graphql/mutations";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: ""
}

const SignUp = () => {

    const navigate = useNavigate();
    const [ mutate ] = useMutation(CREATE_USER);
    const [ signIn ] = useSignIn();
    console.log("test")

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await mutate({ 
                variables: {
                    user: {
                        username: username,
                        password: password
                    }
                 }
            });
            console.log("user "+ data + " created succesfully.")

            const { authenticate } = await signIn({ username, password });
            console.log(authenticate);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (<>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SingUpValidationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}/>}
        </Formik>
        </>
        );
}

export default SignUp;