const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = 3001

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = server
