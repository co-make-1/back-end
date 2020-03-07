const router = require('express').Router(); 

//routes
router.get('/', (req,res) => {
    res.json({ router: "users" })
})


router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Issues.findById(id)
  .then(scheme => {
    if (scheme) {
      Issues.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});

module.exports = router;