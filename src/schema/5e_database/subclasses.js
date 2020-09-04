import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    subclass(name: String, index: String): Subclass
    subclasses: [Subclass!]
  }
 
  type Subclass {
    index: ID!
    name: String!
  }
`;