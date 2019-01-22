const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/inhaalexamens', (err, database) => {
  if (err) return console.log(err)
  db = database.db('inhaalexamens')
  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
  })
})