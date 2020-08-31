import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    condition(name: String, index: String): Condition
    conditions: [Condition!]
  }
 
  type Condition {
    index: ID!
    name: String!
  }
`;