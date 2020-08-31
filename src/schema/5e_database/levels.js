import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    level(name: String, index: String): Level
    levels: [Level!]
  }
 
  type Level {
    index: ID!
    name: String!
  }
`;