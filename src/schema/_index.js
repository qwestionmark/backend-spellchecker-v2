import { gql } from 'apollo-server-express';
import spell from './spell';
 
const linkSchema = gql`
  type Query {
    _: Boolean
    test: String!
  }
 
  type Mutation {
    _: Boolean
  }
 
  type Subscription {
    _: Boolean
  }
`;
 
export default [linkSchema, spell];