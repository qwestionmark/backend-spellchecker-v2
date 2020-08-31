import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    spellcasting(name: String, index: String): Spellcasting
    spellcastings: [Spellcasting!]
  }
 
  type Spellcasting {
    index: ID!
    name: String!
  }
`;