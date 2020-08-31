import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    equipment(name: String, index: String): Equipment
    equipments: [Equipment!]
  }
 
  type Equipment {
    index: ID!
    name: String!
  }
`;