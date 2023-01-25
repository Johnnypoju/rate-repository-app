import * as yup from 'yup';

const SingUpValidationSchema = () => {
    return yup.object().shape({
        username: yup
            .string()
            .min(1, 'Username must be at least 1 characters!')
            .max(30, 'Username cannot be longer than 30 characters')
            .required('Username is required!'),
        password: yup
            .string()
            .min(1, 'Password must be at least 8 characters!')
            .max(30, 'Password cannot be longer than 30 characters')
            .required('Password is required!'),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref('password')], "Passwords do not match")
            .required()
    })
};

export default SingUpValidationSchema;