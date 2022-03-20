import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    hello: String!
    reserves: [Reserve!]!
    reserve(phone: String!): [Reserve!]!
  }
  type Reserve {
    id: ID!
    name: String!
    phone: String!
    date: String!
    time: String!
  }
  type Deleted {
    acknowledged: Boolean!
    deletedCount: Int!
  }
  type Mutation {
    createReserve(name: String!, phone: String!, date: String!, time: String!): Reserve!
    deleteReserve(id: ID!): Deleted!
  }
`
