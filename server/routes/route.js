const express = require('express')
const router = express.Router()
const User = require('../model/models')
router.get('/get', async (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(405).json(err))
});
router.post('/add', async (req, res) => {
    const { name, email } = req.body
    const newUser = new User({
        name, email
    })
    newUser.save()
        .then(() => res.json("user added"))
        .catch(err => res.status(404).json(err))
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    User.findByIdAndDelete({ _id: id })
        .then(() => res.json("User deleted"))
        .catch(err => res.status(404).json(err))
})
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    const newUser = new User({
        name: "", email: ""
    })
    newUser.save()
        .then(() => res.json("user updated"))
        .catch(err => res.status(404).json(err))

})
module.exports = router