import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    languages: [Language!]
    language(name: String, index: String): Language
  }
 
  type Language {
    index: ID!
    name: String!
  }
`;