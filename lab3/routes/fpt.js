var express = require ('express')
var router = express.Router()

//URL : locahost:3000/fpt
router.get('/', (req, res ) => {
    res.render ('fpt/index')
})

module.exports = router