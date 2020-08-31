import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    monster(name: String, index: String): Monster
    monsters: [Monster!]
  }
 
  type Monster {
    index: ID!
    name: String!
  }
`;