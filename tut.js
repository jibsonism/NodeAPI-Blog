require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./blog')
const blogRoutes = require('./routes/blogRoute');
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')


const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

const app = express()

const corsOptions = {
  origin: FRONTEND,
  optionSuccessStatus: 200 
}

app.get(cors(corsOptions))


mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo")
    app.listen(PORT,() => {
        console.log(`listening on ${PORT}`)
    })
  }).catch((error) => {
    console.log(error)
  })
  



app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api', blogRoutes);

app.use(errorMiddleware);




