import { gql } from '@apollo/client'


export const REPOSITORIES = gql `
fragment Nodes on Repositories {
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
 }`