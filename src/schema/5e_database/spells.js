import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    spells: [Spell!]
    spell(name: String, index: String): Spell
  }
 
  type Spell {
    index: ID!
    name: String!
    desc: [String!]
    range: String!
    components: [String]!
    material: String!
    ritual: Boolean!
    duration: String!
    casting_time: String!
    level: Int!
    attack_type: String!
    damage: Damage!
    classes: [Class!]
    school: String!
    subclasses: [Subclass!]
  }
`;