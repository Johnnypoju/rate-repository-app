import { useMutation } from "@apollo/client";
import { AUTHENTICATION } from '../graphql/mutations';
import { useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useSignIn = () => {
  
    const [mutate, result] = useMutation(AUTHENTICATION, {
      refetchQueries: { queries: [GET_AUTHENTICATED_USER]}
    });
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const authenticationInput = {
        username,
        password
      };
      try {
        const { data } = await mutate({ variables: {input: authenticationInput}});
        if (data) {
          await authStorage.setAccessToken(data.authenticate.accessToken);
          apolloClient.resetStore();
        }
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
        
    };
    
    return [signIn, result];
  };

  export default useSignIn;