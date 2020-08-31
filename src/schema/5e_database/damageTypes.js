import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    damageType(name: String, index: String): DamageType
    damageTypes: [DamageType!]
  }
 
  type DamageType {
    index: ID!
    name: String!
  }
`;