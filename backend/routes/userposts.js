const router = require('express').Router()
let Userpost = require('../models/userposts.model')

router.route('/').get((req,res) => {
    Userpost.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description
    // const date = Date.parse(req.body.date)

    const newUserPost = new Userpost({
        username,
        description
        })

    newUserPost.save() 
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Userpost.findById(req.params.id)
    .then(userpost => res.json(userpost))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Userpost.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Userpost.findById(req.params.id)
    .then(userpost => {
        userpost.username = req.body.username;
        userpost.description = req.body.description;

        userpost.save()
        .then(() => res.json("Post udpated"))
        .catch(err => res.status(400).json("Error: " + err))
    })
})

module.exports = router