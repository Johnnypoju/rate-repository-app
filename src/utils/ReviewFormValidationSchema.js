import * as yup from 'yup';

const ReviewFormValidationSchema = () => {
    return yup.object().shape({
        ownerName: yup
            .string()
            .required("Repository owner name is required!"),
        repositoryName: yup
            .string()
            .required("Repository name is required!"),
        rating: yup
            .number()
            .min(0, "Rating must be between 0 - 100.")
            .max(100, "Rating must be between 0 - 100.")
            .required("Rating is required"),
        text: yup
            .string()
    })
};

export default ReviewFormValidationSchema;