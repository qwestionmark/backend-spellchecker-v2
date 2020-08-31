import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    abilityScore(name: String, index: String): AbilityScore
    abilityScores: [AbilityScore!]
  }
 
  type AbilityScore {
    index: ID!
    name: String!
  }
`;