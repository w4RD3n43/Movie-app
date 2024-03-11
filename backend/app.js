
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const movieSchema = require('./schema/schema')
const movieResolver = require('./resolvers/resolvers')
const cors = require('cors')
mongoose.connect('mongodb+srv://hangargevitthal:W4rd3N%4043@movie-app.hquozzg.mongodb.net/').then(()=>{
  console.log('mongoDb is connected')
}).catch((err) => {
  console.log('error :', err)
})

app.use(cors())

app.use('/graphql',
graphqlHTTP({
  schema: movieSchema,
  rootValue: movieResolver ,
  graphiql: true
}))
app.get('/',(req, res) => {
  res.send(
    '<h1> hello from express</h1> hello from me'
  )
})
app.listen('4000', ()=>{
  console.log('server is up and running')
})