const express = require('express')
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded())
app.set('view engine','ejs')

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(3020)