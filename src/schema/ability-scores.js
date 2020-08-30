import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    abilityScores: [AbilityScore!]
    abilityScore(name: String, index: String): AbilityScore
  }
 
  type AbilityScore {
    index: ID!
    name: String!
  }
`;