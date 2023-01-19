import { gql } from '@apollo/client';


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

export const GET_USERS = gql`
    query {
        users {
           edges {
            node {
                username
            }
           } 
        }
    }
`;