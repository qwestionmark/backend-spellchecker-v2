import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    spells: [Spell!]
    spell(name: String, index: String): Spell
  }

  type Spell {
    index: ID!
    name: String!
    desc: String!
    range: String!
    components: [String]!
    material: String
    ritual: Boolean!
    duration: String!
    castingTime: String!
    level: Int!
    attack_type: String
    damageType: String!
    classes: [String!]
    school: String!
    subclasses: [String!]
    damageAtSlotLevel: DamageAtSlotLevel
  }
  type DamageAtSlotLevel {
    first: String
    second: String
    third: String
    fourth: String
    fifth: String
    sixth: String
    seventh: String
    eighth: String
    ninth: String
  }
`;

// TODO: create schema type and resolver for damage_at_slot_level
// and int cannot be used as a key in type and snakecase field should become camelcase
