import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    class(name: String, index: String): Class
    classs: [Class!]
  }
 
  type Class {
    index: ID!
    name: String!
  }
`;