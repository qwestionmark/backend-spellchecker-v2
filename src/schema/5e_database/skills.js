import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    skill(name: String, index: String): Skill
    skills: [Skill!]
  }
 
  type Skill {
    index: ID!
    name: String!
  }
`;