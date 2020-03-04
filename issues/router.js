const router = require('express').Router(); 

//routes
router.get('/', (req,res) => {
    res.json({ router: "issues" })
})

module.exports = router;