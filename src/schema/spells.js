import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    spells: [Spell!]
    spell(name: String, index: String): Spell
  }
 
  type Spell {
    index: ID!
    name: String!
  }
`;