import { gql } from 'apollo-server-express'

export default gql`
    type Damage {
        damage_type: DamageType!
    }
    type School {
        name: String!
    }
    type SubClass {
        name: String!
    }
`