import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    equipmentCategory(name: String, index: String): EquipmentCategory
    equipmentCategories: [EquipmentCategory!]
  }
 
  type EquipmentCategory {
    index: ID!
    name: String!
  }
`;