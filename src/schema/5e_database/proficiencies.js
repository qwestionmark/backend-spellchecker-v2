import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    proficiency(name: String, index: String): Proficiency
    proficiencies: [Proficiency!]
  }
 
  type Proficiency {
    index: ID!
    name: String!
  }
`;