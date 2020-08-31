import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    magicSchool(name: String, index: String): MagicSchool
    magicSchools: [MagicSchool!]
  }
 
  type MagicSchool {
    index: ID!
    name: String!
  }
`;