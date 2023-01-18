import * as yup from 'yup';

const SingInValidationSchema = () => {
    return yup.object().shape({
        username: yup
            .string()
            .min(5, 'Username must be at least 5 characters!')
            .required('Username is required!'),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters!")
            .required('Password is required!')
    })
};

export default SingInValidationSchema;