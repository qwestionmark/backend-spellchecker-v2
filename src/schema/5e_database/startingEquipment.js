import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    startingEquipment(name: String, index: String): StartingEquipment
    startingEquipments: [StartingEquipment!]
  }
 
  type StartingEquipment {
    index: ID!
    name: String!
  }
`;