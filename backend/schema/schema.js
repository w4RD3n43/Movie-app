const { buildSchema } = require("graphql")  



const schema = buildSchema(`
  type Query {
    listMovies: [movies]
  }

  type Mutation {
    addMovie(name: String!, genre: String!, year: String!): movies
  }

  type movies {
    name: String
    genre: String
    year: String
  }
`);

module.exports = schema