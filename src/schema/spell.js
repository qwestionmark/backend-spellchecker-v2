import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    spells: [Spell!]
    spell(id: ID!): Spell
  }
 
  type Spell {
    id: ID!
    name: String!
    desc: String!
  }
`;