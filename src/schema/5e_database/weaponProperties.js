import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    weaponProperty(name: String, index: String): WeaponProperty
    weaponProperties: [WeaponProperty!]
  }
 
  type WeaponProperty {
    index: ID!
    name: String!
  }
`;