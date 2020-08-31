import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    feature(name: String, index: String): Feature
    features: [Feature!]
  }
 
  type Feature {
    index: ID!
    name: String!
  }
`;