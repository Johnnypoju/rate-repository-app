import {gql} from '@apollo/client'


export const AUTHENTICATION = gql`
    
    mutation Authentication($input: AuthenticateInput) {
        authenticate(credentials: $input) {
            accessToken
        }
    }
`;