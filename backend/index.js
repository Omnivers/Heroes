const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const heroes = require('./routes/heroes')
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use('/heroes', heroes)
app.listen(5000, () => {
  console.log(`Server running on 5000`)
})
