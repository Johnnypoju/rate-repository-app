import {gql} from '@apollo/client'


export const AUTHENTICATION = gql`
    
    mutation Authentication($input: AuthenticateInput) {
        authenticate(credentials: $input) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`

    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;

export const CREATE_USER = gql`

    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            username
        }
    }
`