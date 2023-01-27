import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  
    const [mutate, result] = useMutation(DELETE_REVIEW, {});
    
    
  
    const deleteReview = async (id) => {

      try {
        const { data } = await mutate({ variables: {id: id}});
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
        
    };
    
    return [deleteReview, result];
  };

  export default useReview;