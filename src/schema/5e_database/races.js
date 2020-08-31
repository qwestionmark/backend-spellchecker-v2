import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    race(name: String, index: String): Race
    races: [Race!]
  }
 
  type Race {
    index: ID!
    name: String!
  }
`;