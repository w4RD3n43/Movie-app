const mongoModel = require('../model/model')

const rootValue = {
  listMovies: () => {
  return mongoModel.find({})
  },
  addMovie: (args) => {
    let newMongoModel = new mongoModel({
      name: args.name,
      genre: args.genre,
      year: args.year
    })
    newMongoModel.save()
    return newMongoModel
  } 
}

module.exports = rootValue