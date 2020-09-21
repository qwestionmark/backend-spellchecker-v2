import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    spells(offset: Int, limit: Int): [Spell!]
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
    attackType: String
    damageType: String!
    classes: [String!]!
    school: String!
    subclasses: [String!]
    damageAtSlotLevel: DamageAtSlotLevel
    higherLevel: String
    areaOfEffect: AreaOfEffect
    dc: DC
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
  type AreaOfEffect {
    type: String
    size: Int
  }
  type DC {
    dcType: String
    dcSucces: String
  }
`;

// TODO: create schema type and resolver for damage_at_slot_level
// and int cannot be used as a key in type and snakecase field should become camelcase
