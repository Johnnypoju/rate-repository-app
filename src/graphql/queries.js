import { gql } from '@apollo/client';
//import { REPOSITORIES } from './fragments';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    createdAt
                    description
                    forksCount
                    fullName
                    id
                    language
                    name
                    ownerAvatarUrl
                    ownerName
                    ratingAverage
                    reviewCount
                    stargazersCount
                    url
                    userHasReviewed
                    watchersCount 
                }
            }
        }
    }
`;