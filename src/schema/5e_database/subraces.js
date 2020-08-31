import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    subrace(name: String, index: String): Subrace
    subraces: [Subrace!]
  }
 
  type Subrace {
    index: ID!
    name: String!
  }
`;