import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    language(name: String, index: String): Language
    languages: [Language!]
  }
 
  type Language {
    index: ID!
    name: String!
  }
`;