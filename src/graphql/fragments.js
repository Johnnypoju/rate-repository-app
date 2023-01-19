import { gql } from '@apollo/client'


export const NODE = gql `
fragment NodeData on RepositoriesNode {
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
 }`;