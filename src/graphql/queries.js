import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const GET_AUTHENTICATED_USER = gql`
    query {
        me {
            id
            username
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

export const GET_SINGLE_REPO = gql`
    query Repository($id: ID!){
        repository(id: $id) {
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
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`