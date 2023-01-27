import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
    
`;

export const GET_AUTHENTICATED_USER = gql`
    query getAuthenticatedUser($includeReviews: Boolean = false, $first: Int, $after: String) {
        me {
            id
            username
            reviews(first: $first, after: $after) @include(if: $includeReviews){
                edges {
                    cursor
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                        repositoryId
                    }
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
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

export const GET_SINGLE_REPO = gql`
    query Repository($id: ID!, $first: Int, $after: String){
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
            reviews(first: $first, after: $after){
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
                    cursor 
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            } 
        }
    }
`