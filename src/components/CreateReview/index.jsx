import ReviewForm from "./ReviewForm";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";

import ReviewFormValidationSchema from '../../utils/ReviewFormValidationSchema'
import { useNavigate } from "react-router-native";

const initialValues = {
    ownerName: "",
    rating: "",
    repositoryName: "",
    text: ""
}

const CreateReview = () => {
    const [ mutate ] = useMutation(CREATE_REVIEW);
    const navigate = useNavigate();
    
    const onSubmit = async (values) => {
        console.log(values);
        try {
            const { data } = await mutate({
                variables: {
                    review: {
                        ownerName: values.ownerName,
                        rating: Number(values.rating),
                        repositoryName: values.repositoryName,
                        text: values.text
                    }
                }
            });
            console.log(data.createReview.repositoryId);
            navigate("/" + data.createReview.repositoryId);
        } catch (error) {
            console.log(error.message);
        }
        
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ReviewFormValidationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/>}
        </Formik>
    )
     
}

export default CreateReview;