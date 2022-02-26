const express = require('express')
const usersRouter = express.Router()

usersRouter
    .get('/',(req ,res) => {
        res.send('List of users')
    })

usersRouter
    .get('/new',(req ,res) => {
        res.render('users/new', {firstName:"Input your name"})
    })

usersRouter.post('/',(req, res) => {
    const isValid = false
    if (isValid) {
        users.push(
            {firstName: req.body.firstName}
        )
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Error")
        res.render('users/new',{
            firstName: req.body.firstName
        })
    }
})

usersRouter
    .route("/:id")
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

const users = [
    {name:'Polar'},
    {name:'Bear'}
]

usersRouter.param("id", (req, res, next, userid) => {
    req.user = users[userid]
    next()
})

module.exports = usersRouter