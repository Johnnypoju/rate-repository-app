import { useMutation } from "@apollo/client";
import { AUTHENTICATION } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATION);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const authenticationInput = {
        username,
        password
      };
      try {
        const mutation = await mutate({ variables: {input: authenticationInput}});
        return mutation;
      } catch (error) {
        console.log(error);
      }
        
    };
  
    return [signIn, result];
  };

  export default useSignIn;