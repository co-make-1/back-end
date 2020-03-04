const router = require('express').Router(); 

//routes
router.get('/', (req,res) => {
    res.json({ router: "users" })
})

module.exports = router;