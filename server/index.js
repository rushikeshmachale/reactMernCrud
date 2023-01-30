const express = require('express')
const app = express()
const cors = require('cors')

const Router = require('./routes/route')
app.use(express.json())
app.use(cors())
const mongoose = require("mongoose");

mongoose.connect("mongodb://rushi:rushi123@cluster0-shard-00-00.h1wov.mongodb.net:27017,cluster0-shard-00-01.h1wov.mongodb.net:27017,cluster0-shard-00-02.h1wov.mongodb.net:27017/user?ssl=true&replicaSet=atlas-4lhff6-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("db connected"))
    .catch(err => console.log(err))
app.use(Router)

app.listen(4000, () => { console.log("listening to 4000")})