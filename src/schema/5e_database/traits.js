import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    trait(name: String, index: String): Trait
    traits: [Trait!]
  }
 
  type Trait {
    index: ID!
    name: String!
  }
`;