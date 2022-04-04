import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    hello: String!
    reserves: [Reserve!]!
    reserveBySlug(slug: String!): Reserve!
    reserveByPhone(phone: String!): Reserve!
  }
  type Reserve {
    id: ID!
    name: String!
    phone: String!
    date: String!
    time: String!
    slug: String
  }

  type Ingredients {
    name: String!
    quantity: Float!
    _type: String!
  }

  type Cocktail {
    id: ID!
    name: String!
    intro: String!
    description: String!
    ingredients: [Ingredients!]!
  }

  input CocktailInput {
    name: String!
    intro: String!
    description: String!
    ingredients: [IngredientsInput!]!
  }

  input IngredientsInput {
    name: String!
    quantity: Float!
    _type: String!
  }

  type Mutation {
    createReserve(name: String!, phone: String!, date: String!, time: String!): Reserve!
    deleteReserve(slug: String!): Boolean!
    editDateTime(date: String!, time: String!, slug: String!): Boolean!

    createCocktail(cocktailInput: CocktailInput!): Cocktail!
  }
`
